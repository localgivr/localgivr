class NeedSerializer < ActiveModel::Serializer
  attributes :id, :title, :story, :amount, :expiration, :link, :completed, :img_url
  has_one :org
  has_one :type

  def org
    {
      id: object.org.id,
      name: object.org.name,
      address: {
        street: object.org.street,
        city: object.org.city,
        state: object.org.state,
        zip: object.org.zip
      },
      ein: object.org.ein,
      verified: object.org.verified
    }
  end

end
