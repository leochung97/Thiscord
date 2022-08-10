class AddFunctionalities < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.integer :owner_id, index: true, null: false, foreign_key: true
      t.string :name, index: true, null: false, default: 'Server'
      t.boolean :is_public, null: false, index: true
      t.timestamps
    end

    create_table :channels do |t|
      t.integer :server_id, index: true, null: false, foreign_key: true
      t.string :name, index: true
      t.timestamps
    end
    
    create_table :conversations do |t|
      t.integer :owner_id, index: true, null: false, foreign_key: true
      t.string :name, index: true
      t.timestamps
    end

    create_table :conversation_participants do |t|
      t.integer :participant_id, null: false, foreign_key: true, index: true
      t.integer :conversation_id, null: false, foreign_key: true, index: true
      t.timestamps
    end

    create_table :friendships do |t|
      t.integer :user_id, foreign_key: true, index: true, null: false
      t.integer :friend_id, foreign_key: true, index: true, null: false 
      t.string :status, null: false, inclusion: { in: ['outgoing', 'incoming', 'resolved']}
    end

    create_table :server_memberships do |t|
      t.integer :user_id, foreign_key: true, index: true, null: false
      t.integer :server_id, foreign_key: true, index: true, null: false 
      t.timestamps
    end

    create_table :direct_messages do |t|
      t.integer :creator_id, foreign_key: true, null: false, index: true
      t.integer :conversation_id, foreign_key: true, null: false, index: true
      t.integer :replied_message_id, foreign_key: true, index: true
      t.text :content, null: false
      t.timestamps
    end

    create_table :messages do |t|
      t.integer :creator_id, foreign_key: true, null: false, index: true
      t.integer :channel_id, foreign_key: true, null: false, index: true
      t.integer :replied_message_id, foreign_key: true, index: true
      t.text :content, null: false
      t.timestamps
    end
  end
end
