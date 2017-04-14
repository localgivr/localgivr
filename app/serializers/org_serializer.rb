class OrgSerializer < ActiveModel::Serializer
  attributes :id, :name, :needs_count, :fulfilled_count, :street, :city, :state, :zip, :phone, :email, :ein, :verified
end
