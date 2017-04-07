class Need < ApplicationRecord
  belongs_to :org
  belongs_to :type

  validates :title, :story, :link, :type, presence: true
end
