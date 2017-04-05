class Org < ApplicationRecord
  has_many :needs
  has_many :follows, as: :followable
  has_many :users, through: :follows

  has_secure_password
  has_secure_token
end
