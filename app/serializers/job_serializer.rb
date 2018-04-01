class JobSerializer < ActiveModel::Serializer
  attributes :id, :location, :street_address, :city, :state, :zip_code, :contact_person, :contact_number, :nature, :duration, :client, :notes
end
