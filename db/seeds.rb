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
      phone: Faker::PhoneNumber.cell_phone,
      zip: Faker::Address.zip,
      img_url: Faker::Avatar.image
    )
    users << user
    user.types << @types.sample
  end
  users
end

def new_orgs
  print "\nadding 5 new orgs: "
  orgs = []
  5.times do
    print '.'
    org = Org.create!(
      name: Faker::Space.agency,
      password: "password",
      street: Faker::Address.street_address,
      city: Faker::Address.city,
      state: Faker::Address.state_abbr,
      zip: Faker::Address.zip,
      phone: Faker::PhoneNumber.cell_phone,
      email: Faker::Internet.unique.email,
      ein: Faker::Company.ein
    )
    orgs << org
  end
  orgs
end

# def get_cats(cats)
#   cats.map{ |c| Cat.find_or_create_by(name: c)}
# end
#
# def get_types(types)
#   types.map{ |t| Type.find_or_create_by(name: t)}
# end

def new_needs(orgs)
  orgs.each do |o|
    need = o.needs.create!(
      title: Faker::Space.planet,
      story: Faker::Hipster.paragraph,
      amount: rand(1..100),
      expiration: rand(2..30).days.from_now,
      link: Faker::Internet.url,
      completed: false,
      img_url: Faker::LoremPixel.image
    )
    need.type = @types.sample
    Cating.find_or_create_by(need: need, cat: @cats.sample)
    Cating.find_or_create_by(need: need, cat: @cats.sample)
    need.save
  end
end

@cats = %w(animals culture community education health environment social)
@types = %w(donation supplies volunteer)

Faker::Config.locale = 'en-US'

@cats.map!{ |c| Cat.find_or_create_by(name: c)}
@types.map!{ |t| Type.find_or_create_by(name: t)}

userslist = User.all.length < 5 ? new_users : User.all
orgslist = Org.all.length < 5 ? new_orgs : Org.all

new_needs(orgslist) if Need.all.count < 10
