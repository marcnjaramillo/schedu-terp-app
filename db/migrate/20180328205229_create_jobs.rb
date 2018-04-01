class CreateJobs < ActiveRecord::Migration[5.1]
  def change
    create_table :jobs do |t|
      t.string :location
      t.string :street_address
      t.string :city
      t.string :state
      t.string :zip_code

      t.string :contact_person
      t.string :contact_number

      t.string :nature
      t.integer :duration

      t.string :client

      t.text :notes
      t.timestamps
    end
  end
end
