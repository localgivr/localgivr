
Faker::Config.locale = 'en-US'

@cats = ["Animal Rights ",
         "Culture  ",
         "Community  ",
         "Education  ",
         "Health  ",
         "Environment  ",
         "Social Justice  "]

@types = %w(Donation Supplies Volunteer)

@zips = %w( 46262 46280 46290 )

def first_org
  print "\nadding first org"
  print '.'
  org = Org.create!(
    name: "Central Indianapolis Aid",
    password: "tiyorgpassword",
    street: Faker::Address.street_address,
    city: "Indianapolis",
    state: "IN",
    zip: "46204", #downtown
    phone: Faker::PhoneNumber.cell_phone,
    email: "CIA@example.com",
    ein: Faker::Company.ein
  )
  org
end

def second_org
  print "\nadding second org"
  print '.'
  org = Org.create!(
    name: "BFF4evr animal shelter",
    password: "tiyorgpassword",
    street: Faker::Address.street_address,
    city: "Indianapolis",
    state: "IN",
    zip: "46220", #broad ripple
    phone: Faker::PhoneNumber.cell_phone,
    email: "bffpets@example.com",
    ein: Faker::Company.ein
  )
  org
end

def third_org
  print "\nadding third org"
  print '.'
  org = Org.create!(
    name: "Healthy Planet Coalition",
    password: "tiyorgpassword",
    street: Faker::Address.street_address,
    city: "Indianapolis",
    state: "IN",
    zip: "46203", #fountain square
    phone: Faker::PhoneNumber.cell_phone,
    email: "Recycle@example.com",
    ein: Faker::Company.ein
  )
  org
end
