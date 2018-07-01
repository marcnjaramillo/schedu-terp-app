class DropInterpretersTable < ActiveRecord::Migration[5.1]
  def change
    drop_table :interpreters
  end
end
