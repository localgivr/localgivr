class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :phone
      t.string :password_digest
      t.string :zip
      t.integer :needs_met
      t.string :img_url
      t.string :token
      t.integer :follows_count

      t.timestamps
    end
  end
end
