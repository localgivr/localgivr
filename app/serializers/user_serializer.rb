class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone, :password_digest, :zip, :needs_met, :img_url, :token
end
