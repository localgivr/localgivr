class OrgExtendedSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :ein, :verified, :token
end
