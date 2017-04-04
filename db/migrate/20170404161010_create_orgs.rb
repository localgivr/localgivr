class CreateOrgs < ActiveRecord::Migration[5.0]
  def change
    create_table :orgs do |t|
      t.string :name
      t.integer :need_count
      t.integer :fulfilled_count
      t.string :password_digest
      t.string :street
      t.string :city
      t.string :state
      t.string :zip
      t.string :phone
      t.string :email
      t.string :eid
      t.boolean :verified

      t.timestamps
    end
  end
end
