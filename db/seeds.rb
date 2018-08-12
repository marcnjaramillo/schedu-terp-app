# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create!([{
  first_name: "Marc",
  last_name: "Jaramillo",
  street_address: "14000 SE Cascade Park Dr Apt 114",
  city: "Vancouver",
  state: "WA",
  zip_code: "98683",
  rate: 45.00
  }])

jobs = Job.create!([{
   location: "Whovian Hospital",
   street_address: "123 Tardis Way",
   city: "Gallifrey",
   state: "UK",
   zip_code: "91011",
   contact_person: "Doctor",
   contact_number: "555-555-5555",
   nature: "Time travel",
   duration: 2,
   client: "River Song",
   notes: "Spoilers"
  }])
