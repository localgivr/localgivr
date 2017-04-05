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
      last_name: Faker::Superhero.suffix
    )
    users << user
  end
  users
end
