class CatSerializer < ActiveModel::Serializer
  attributes :id, :name, :followed

  def followed
    object.follows.exists?(user: current_user) if current_user
  end
end
