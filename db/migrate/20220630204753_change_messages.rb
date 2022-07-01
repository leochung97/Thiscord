class ChangeMessages < ActiveRecord::Migration[5.2]
  def change
    remove_column :messages, :body
    add_column :messages, :body, :string, null: false
    add_column :messages, :author_id, :integer, null: false
    add_column :messages, :channel_id, :integer, null: false
  end
end
