class Org < ApplicationRecord
  has_many :needs
  has_many :follows, as: :followable
  has_many :users, through: :follows

  has_secure_password
  has_secure_token

  validates :name, :email, :phone, uniqueness: true
  validates  :name, :email, :zip, presence: true
end
