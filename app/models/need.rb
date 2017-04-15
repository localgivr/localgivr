class Need < ApplicationRecord

  paginates_per 5
  acts_as_mappable auto_geocode: {field: :zip, error_message: 'Could not geocode zip'}

  scope :active, -> { where('expiration > ? AND completed = ?', Time.local(2017,4,28), false)}


  belongs_to :org, :counter_cache => true
  belongs_to :type

  has_many :catings
  has_many :cats, through: :catings

  validates :title, :story, :link, :type, presence: true
end
