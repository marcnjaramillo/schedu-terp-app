class ChangeRateType < ActiveRecord::Migration[5.1]
  def change
    change_column :interpreters, :rate, :float
  end
end
