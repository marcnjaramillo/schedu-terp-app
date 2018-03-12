class CreateCertifications < ActiveRecord::Migration[5.1]
  def change
    create_table :certifications do |t|
      t.integer :interpreter_id
      t.string :name
      t.timestamps
    end
  end
end
