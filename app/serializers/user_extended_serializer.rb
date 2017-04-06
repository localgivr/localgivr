class UserExtendedSerializer < ActiveModel::Serializer
    attributes :id, :first_name, :last_name, :email, :phone, :zip, :needs_met, :img_url, :token
end
