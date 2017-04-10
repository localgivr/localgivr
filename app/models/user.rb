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
