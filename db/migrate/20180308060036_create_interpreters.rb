class CreateInterpreters < ActiveRecord::Migration[5.1]
  def change
    create_table :interpreters do |t|
      t.string :first_name
      t.string :last_name

      t.string :street_address
      t.string :city
      t.string :state
      t.string :zip_code

      t.string :certification, array: true
      t.decimal :rate

    end
  end
end
