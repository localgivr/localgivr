class CreateCatings < ActiveRecord::Migration[5.0]
  def change
    create_table :catings do |t|
      t.references :need, foreign_key: true
      t.references :cat, foreign_key: true

      t.timestamps
    end
  end
end
