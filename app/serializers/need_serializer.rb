class NeedSerializer < ActiveModel::Serializer
  attributes :id, :title, :story, :amount, :expiration, :link, :completed, :img_url, :city, :state
  has_one :org
  has_one :type
  has_many :cats

  def org
    # object.org.name
    {
      id: object.org.id,
      name: object.org.name,
      # city: object.org.city,
      # state: object.org.state,
      # zip: object.org.zip,
      verified: object.org.verified
    }
  end

  def type
    object.type.name
  end

  def cats
    object.cats.map { |c| c.name }
  end

end
