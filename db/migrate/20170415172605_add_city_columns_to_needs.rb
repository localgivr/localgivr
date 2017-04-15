class AddCityColumnsToNeeds < ActiveRecord::Migration[5.0]
  def change
    add_column :needs, :city, :string
    add_column :needs, :state, :string
  end
end
