class CreateServerChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :server_channels do |t|
      t.integer :server_id, null: false
      t.integer :channel_id, null: false
      t.timestamps
    end
  end
end
