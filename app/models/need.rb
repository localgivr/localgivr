class Need < ApplicationRecord

  paginates_per 5
  acts_as_mappable #auto_geocode: {field: :zip, error_message: 'could not be geocoded'}
  before_validation :geocode_zip, :on => :create

  scope :active, -> { where('expiration > ? AND completed = ?', Time.now, false)}

  belongs_to :org, :counter_cache => true
  belongs_to :type

  has_many :catings
  has_many :cats, through: :catings

  validates :title, :story, :link, :type, presence: true

  private

  def geocode_zip
    geo=Geokit::Geocoders::MultiGeocoder.geocode (zip)
    errors.add(:zip, "could not be geocoded") if !geo.success
    self.lat, self.lng, self.city, self.state = geo.lat,geo.lng,geo.city,geo.state if geo.success
  end

end
