class AddZipToNeeds < ActiveRecord::Migration[5.0]
  def change
    add_column :needs, :zip, :string
  end
end
