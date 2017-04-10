class Need < ApplicationRecord
  belongs_to :org
  belongs_to :type

  has_many :catings
  has_many :cats, through: :catings

  validates :title, :story, :link, :type, presence: true
end
