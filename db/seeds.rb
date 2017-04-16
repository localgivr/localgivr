# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




#initialization stuff:

Faker::Config.locale = 'en-US'

@zips = %w( 46262 46280 46290 )
@num = 5

@cats = %w(animals culture community education health environment social)
@types = %w(donation supplies volunteer)

@dogs = %w(https://perchprod.s3.amazonaws.com/profile_images/user6.squarespace https://www.dogspuppiesforsale.com/uploads/source/Category%20update/Bernese%20Mountain/Bernese%20Mountain%20puppies%20for%20sale%203.jpg https://s-media-cache-ak0.pinimg.com/236x/46/99/16/469916823a409b4ade290bbd94844fd7.jpg http://i.dailymail.co.uk/i/pix/2015/06/18/17/29BB7F2800000578-3129919-Bathtime_Biscuit_enjoys_a_bath_with_a_duckling_and_prairie_dog_a-a-2_1434627372812.jpg)


# creation methods

def new_users(num)
  print "\nadding #{num} new users: "
  users = []
  num.times do
    print '.'
    user = User.create!(
      email: Faker::Internet.unique.email,
      password: "password",
      first_name: Faker::Superhero.descriptor,
      last_name: Faker::Superhero.suffix,
      phone: Faker::PhoneNumber.cell_phone,
      zip: @zips.sample,
      img_url: Faker::Avatar.image
    )
    users << user
    user.types << @types.sample
  end
  users
end

def new_orgs(num)
  print "\nadding #{num} new orgs: "
  orgs = []
  num.times do
    print '.'
    org = Org.create!(
      name: Faker::Space.unique.planet,
      password: "password",
      street: Faker::Address.street_address,
      city: Faker::Address.city,
      state: Faker::Address.state_abbr,
      zip: @zips.sample,
      phone: Faker::PhoneNumber.cell_phone,
      email: Faker::Internet.unique.email,
      ein: Faker::Company.ein
    )
    orgs << org
  end
  orgs
end


def new_needs(orgs)
  print "\nmaking the database needy: "
  orgs.each do |o|
    5.times do
      print '.'
      need = o.needs.new(
        title: Faker::Pokemon.unique.name,
        story: Faker::Hipster.paragraph,
        amount: rand(1..100),
        expiration: rand(2..30).days.from_now,
        link: Faker::Internet.url,
        completed: false,
        zip: o.zip,
        img_url: @dogs.sample
      )
      need.type = @types.sample
      Cating.find_or_create_by(need: need, cat: @cats.sample)
      Cating.find_or_create_by(need: need, cat: @cats.sample)
      need.save!
    end
  end
end

def update_zip(obj_list)
  print "\nchecking zipcodes: "
  obj_list.each do |n|
    unless n.zip
      print '.'
      n.zip = @zips.sample
      n.save
      # n.update(zip: @zips.sample)
    end
  end
end

def new_follows(users, orgs)
  print "\nadding follows."
  users.each.with_index do |u,i|
    5.times do
      print '.'
      u.follows.find_or_create_by!(followable: @cats.sample)
      u.follows.find_or_create_by!(followable: orgs.sample) if rand(1..10) > 7
    end unless i%10 == 0
  end
end


# actually run stuff here:

@cats.map!{ |c| Cat.find_or_create_by(name: c)}
@types.map!{ |t| Type.find_or_create_by(name: t)}

userslist = User.all.length < @num*2 ? new_users(@num*2) : User.all
orgslist = Org.all.length < @num ? new_orgs(@num) : Org.all
needslist = Need.all.count < @num*5 ? new_needs(orgslist) : Need.all

# update_zip(orgslist)
# update_zip(userslist)
update_zip(needslist)
new_follows(userslist, orgslist) unless Follow.all.count > @num

print "\n"
