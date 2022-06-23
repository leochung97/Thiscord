class CreateTextChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :text_channels do |t|
      t.string :channel_name, null: false
      t.string :path, null: false
      t.timestamps
    end
  end

  drop_table :channels
end
