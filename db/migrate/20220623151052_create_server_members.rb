class CreateServerMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :server_members do |t|
      t.integer :server_id, null: false
      t.integer :member_id, null: false
      t.timestamps
    end
  end
end
