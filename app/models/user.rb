class User < ApplicationRecord
  has_many :follows, :counter_cache => true

  has_secure_password
  has_secure_token
end
