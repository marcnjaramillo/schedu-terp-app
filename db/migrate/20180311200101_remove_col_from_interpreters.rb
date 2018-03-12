class RemoveColFromInterpreters < ActiveRecord::Migration[5.1]
  def change
    remove_column :interpreters, :certification
  end
end
