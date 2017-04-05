class OrgSerializer < ActiveModel::Serializer
  attributes :id, :name, :need_count, :fulfilled_count, :password_digest, :street, :city, :state, :zip, :phone, :email, :eid, :verified
end
