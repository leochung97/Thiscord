class ChangestoServers < ActiveRecord::Migration[5.2]
  def change
    remove_column :servers, :chat_channel_index
  end
end
