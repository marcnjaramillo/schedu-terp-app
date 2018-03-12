# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Interpreter.create!([{
  first_name: "Marc",
  last_name: "Jaramillo",
  street_address: "14000 Cascade Park Dr Apt 114",
  city: "Vancouver",
  state: "WA",
  zip_code: "98683",
  rate: 45.00
  }])

  Certification.create!([{
    interpreter_id: 1,
    name: "NIC"
  }])

  Certification.create!([{
    interpreter_id: 1,
    name: "Ed:K-12"
    }])
