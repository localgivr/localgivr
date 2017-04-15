class OrgSerializer < ActiveModel::Serializer
  attributes :id, :name, :needs_count, :fulfilled_count, :street, :city, :state, :zip, :phone, :email, :ein, :verified, :followed

  def followed
    object.follows.exists?(user: current_user) if current_user
  end
end
