class AddColumnTokenToOrgs < ActiveRecord::Migration[5.0]
  def change
    add_column :orgs, :token, :string
  end
end
