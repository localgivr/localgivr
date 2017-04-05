class RenameEidToEin < ActiveRecord::Migration[5.0]
  def change
    rename_column :orgs, :eid, :ein
  end
end
