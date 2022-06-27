class ChannelChanges < ActiveRecord::Migration[5.2]
  def change
    rename_table :text_channels, :channels
    remove_column :channels, :path
    add_column :channels, :admin_id, :integer, null: false
  end
end
