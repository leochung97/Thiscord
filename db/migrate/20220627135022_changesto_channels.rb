class ChangestoChannels < ActiveRecord::Migration[5.2]
  def change
    add_column :channels, :server_id, :integer, null: false
    remove_column :channels, :admin_id
    drop_table :server_channels
  end
end
