class CreateNeeds < ActiveRecord::Migration[5.0]
  def change
    create_table :needs do |t|
      t.string :title
      t.text :story
      t.integer :amount
      t.date :expiration
      t.string :link
      t.boolean :completed
      t.string :img_url
      t.references :org, foreign_key: true
      t.references :type, foreign_key: true

      t.timestamps
    end
  end
end
