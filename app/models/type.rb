class Type < ApplicationRecord
  has_many :needs
  has_many :typings
  has_many :users, through: :typings

  validates :name, uniqueness: true
end
