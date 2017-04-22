class User < ApplicationRecord
  has_many :follows
  has_many :followed_orgs, through: :follows, source: :followable, source_type: "Org"
  has_many :followed_cats, through: :follows, source: :followable, source_type: "Cat"
  has_many :typings
  has_many :types, through: :typings

  # scope :

  has_secure_password
  has_secure_token
  acts_as_mappable #auto_geocode: {field: :zip, error_message: 'Could not geocode zip'}
  before_validation :geocode_zip, :on => :create

  validates :email, :phone, uniqueness: true
  validates  :first_name, :last_name, :email, :zip, presence: true

  def feed(num = 1)
    result = Need.joins(:cats)
    result = result.where("cats.id" => self.follows.where(followable_type: "Cat").pluck(:followable_id)) if self.follows.exists?(followable_type: "Cat")
    result = result.where(org_id: self.follows.where(followable_type: "Org").pluck(:followable_id)) if self.follows.exists?(followable_type: "Org")
    result = result.where(type_id: self.typings.pluck(:type_id))
    result = result.within(20, origin: self).active.limit(num).by_distance(origin: self).group('needs.id')
  end

  def self.send_reminder
    @client = get_client
    print "\n"
    User.all.limit(3).each do |user|
      print '.'
      @client.account.messages.create({
          :to => "3178258855",#user.phone,"248-561-4023", "3178258855"
          :from => '13178544483',
          :body => "(local)New weekly opportunity to serve:  https://localgivr.herokuapp.com/text/#{user.feed.first.id}/#{user.token}#{Faker::Internet.password(8,8)}" #TODO: not very secure!
      }) unless user.feed.empty?
    end

  end

  private

  def self.get_client
    account_sid = ENV['TwilioAccountSid']
    auth_token = ENV['TwilioAuthToken']

    # set up a client to talk to the Twilio REST API
    @client = Twilio::REST::Client.new account_sid, auth_token
  end

  def geocode_zip
    geo=Geokit::Geocoders::MultiGeocoder.geocode (zip)
    errors.add(:zip, "could not be geocoded") if !geo.success
    self.lat, self.lng, self.city, self.state = geo.lat,geo.lng,geo.city,geo.state if geo.success
  end

end
