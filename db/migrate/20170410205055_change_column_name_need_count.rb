class ChangeColumnNameNeedCount < ActiveRecord::Migration[5.0]
  def change
    rename_column :orgs, :need_count, :needs_count
  end
end
