class NeedSerializer < ActiveModel::Serializer
  attributes :id, :title, :story, :amount, :expiration, :link, :completed, :img_url, :city, :state
  has_one :org
  has_one :type

  def org
    {
      id: object.org.id,
      name: object.org.name,
      city: object.org.city,
      state: object.org.state,
      zip: object.org.zip,
      verified: object.org.verified
    }
  end

end
