class UpdateDefaultValues < ActiveRecord::Migration[5.0]
  def change
    reversible do |direction|
      direction.up {
        User.where(needs_met: nil).update_all(needs_met: 0)
      }
    end
    change_column :users, :needs_met, :integer, default: 0
  end
end
