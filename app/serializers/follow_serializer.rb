class FollowSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :followable
end
