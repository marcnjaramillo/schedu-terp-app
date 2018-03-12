class InterpreterSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :street_address, :city, :state, :zip_code, :rate
  has_many :certifications
end
