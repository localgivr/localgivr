# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def new_users
  print "\nadding 5 new users: "
  users = []
  5.times do
    print '.'
    user = User.create!(
      email: Faker::Internet.unique.email,
      password: "password",
      first_name: Faker::Superhero.descriptor,
      last_name: Faker::Superhero.suffix,
      phone: Faker::PhoneNumber.phone_number,
      zip: Faker::Address.zip,
      img_url: Faker::Avatar.image
    )
    users << user
  end
  users
end

def new_orgs
  print "\nadding 5 new orgs: "
  orgs = []
  5.times do
    print '.'
    org = Org.create!(
      name: Faker::Cat.breed,
      password: "password",
      street: Faker::Address.street_address,
      city: Faker::Address.city,
      state: Faker::Address.state_abbr,
      zip: Faker::Address.zip,
      phone: Faker::PhoneNumber.phone_number,
      email: Faker::Internet.unique.email,
      ein: Faker::Company.ein
    )
    orgs << org
  end
  orgs
end




userslist = User.all.length < 5 ? new_users : User.all

orgslist = Org.all.length < 5 ? new_orgs : Org.all
