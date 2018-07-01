class CreateProfiles < ActiveRecord::Migration[5.1]
  def change
    create_table :profiles do |t|
      t.integer :user_id
      t.string :street_address
      t.string :city
      t.string :state
      t.string :zip_code
      t.string :phone_number
      t.string :email

      t.timestamps
    end
  end
end
