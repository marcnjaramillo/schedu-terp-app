class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :username
      t.string :password
      t.boolean :admin, default: false
      t.boolean :sceduler, default: false

      t.timestamps
    end
  end
end
