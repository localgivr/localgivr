class Cat < ApplicationRecord
  has_many :catings
  has_many :needs, through: :catings

  has_many :follows, as: :followable
  has_many :users, through: :follows

  validates :name, uniqueness: true
end
