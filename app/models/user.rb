class User < ApplicationRecord
  has_many :follows
  has_many :followed_orgs, through: :follows, source: :followable, source_type: "Org"
  has_many :followed_cats, through: :follows, source: :followable, source_type: "Cat"
  has_many :typings
  has_many :types, through: :typings

  # scope :

  has_secure_password
  has_secure_token

  validates :email, :phone, uniqueness: true
  validates  :first_name, :last_name, :email, :zip, presence: true

  def feed

  end
end


# Need.joins(:types, :cats).where("types.id IN ?", user.types.ids).where("needs.org_id IN ? OR cats.id IN ?", user.followed_orgs.ids, user.followed_cats.ids)
#
# .where("needs.location IN ?", user.zip)
# .where("needs.location IN ?", user.zip.citystate)
#
# # user.types.joins({:needs => :cats}).where("needs.org_id IN ? OR cats.id IN ?", user.followed_orgs.pluck(:id), user.followed_cats.ids)


## working:
#
# active scope - expiration
# Need.where("zip = ?", user.zip)
  ## could also use this to expand:  ZipCodes.db.select{ |k,v| v[:city] == city}.to_a.map{ |z| z[0]}
  ## this would be better if we could just do ZipCodes.identify(zip)[:city] for both

# trying
# Need.where(type_id: user.types.ids)
# Need.where("")


# User.last.typings.pluck(:type_id) #works to get type_id
