class User < ApplicationRecord
  has_many :follows
  has_many :followed_orgs, through: :follows, source: :followable, source_type: "Org"
  has_many :followed_cats, through: :follows, source: :followable, source_type: "Cat"
  has_many :typings
  has_many :types, through: :typings

  # scope :

  has_secure_password
  has_secure_token
  acts_as_mappable auto_geocode: {field: :zip, error_message: 'Could not geocode zip'}

  validates :email, :phone, uniqueness: true
  validates  :first_name, :last_name, :email, :zip, presence: true

  def feed(num = 1)
    result = Need.joins(:cats)
    result = result.where("cats.id" => self.follows.where(followable_type: "Cat").pluck(:followable_id)) if self.follows.exists?(followable_type: "Cat")
    result = result.where(org_id: self.follows.where(followable_type: "Org").pluck(:followable_id)) if self.follows.exists?(followable_type: "Org")
    result = result.where(type_id: self.typings.pluck(:type_id))
    result = result.within(20, origin: self).active.limit(num).by_distance(origin: self).group('needs.id')
  end
end
