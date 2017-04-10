class NeedSerializer < ActiveModel::Serializer
  include PgSearch

  attributes :id, :title, :story, :amount, :expiration, :link, :completed, :img_url
  has_one :org
  has_one :type


  def org
    {
      id: object.org.id,
      name: object.org.name,
      verified: object.org.verified
    }
  end

  def type
    object.type.name
  end

end
