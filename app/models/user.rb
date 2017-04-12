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

  def feed
    Need.joins(:cats)
        .where("cats.id" => self.follows.where(followable_type: "Cat").pluck(:followable_id))
        .where(org_id: self.follows.where(followable_type: "Org").pluck(:followable_id))
        .where(type_id: self.typings.pluck(:type_id)).active
        #.where location check
  end
end


# Need.joins(:types, :cats).where("types.id IN ?", user.types.ids).where("needs.org_id IN ? OR cats.id IN ?", user.followed_orgs.ids, user.followed_cats.ids)
#
# .where("needs.location IN ?", user.zip)
# .where("needs.location IN ?", user.zip.citystate)
#
# # user.types.joins({:needs => :cats}).where("needs.org_id IN ? OR cats.id IN ?", user.followed_orgs.pluck(:id), user.followed_cats.ids)


## working:
#{
# active scope - expiration
# Need.where("zip = ?", user.zip)
# Need.where(type_id: User.last.typings.pluck(:type_id))
# Need.where(org_id: u.follows.where(followable_type: "Org").pluck(:followable_id))
# Need.joins(:cats).where("cats.id" => u.follows.where(followable_type: "Cat").pluck(:followable_id))
#}


# trying
# Need.where(type_id: User.last.types.ids)
# Need.where(type_id: User.last.typings.pluck(:type_id))
# Need.where("")


# User.last.typings.pluck(:type_id) #works to get type_id

#cats
# Need.includes(:cats).where("cats.id" => u.follows.where(followable_type: "Cat").pluck(:followable_id))


#u.follows.where(followable_type: "Cat").pluck(:followable_id)

# Need.where(org_id: u.follows.where(followable_type: "Org").pluck(:followable_id))
# Need.includes(:cats).where("cats.id" => u.follows.where(followable_type: "Cat").pluck(:followable_id))
#Need.joins(:cats).where("cats.id" => u.follows.where(followable_type: "Cat").pluck(:followable_id))
