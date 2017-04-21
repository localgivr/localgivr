class ChangeColumnNeedsMetInUsers < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :needs_met, :integer, :default => 0
  end
end
