class NeedSerializer < ActiveModel::Serializer
  attributes :id, :title, :story, :amount, :expiration, :link, :completed, :img_url
  has_one :org
  has_one :type
end
