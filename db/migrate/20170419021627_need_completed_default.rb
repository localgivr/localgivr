class NeedCompletedDefault < ActiveRecord::Migration[5.0]
  def change
    change_column :needs, :completed, :boolean, :default => false
  end

end
 
