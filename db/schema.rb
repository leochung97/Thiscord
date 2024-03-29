# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_06_29_135557) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "channels", force: :cascade do |t|
    t.integer "server_id", null: false
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_channels_on_name"
    t.index ["server_id"], name: "index_channels_on_server_id"
  end

  create_table "conversation_participants", force: :cascade do |t|
    t.integer "participant_id", null: false
    t.integer "conversation_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["conversation_id"], name: "index_conversation_participants_on_conversation_id"
    t.index ["participant_id"], name: "index_conversation_participants_on_participant_id"
  end

  create_table "conversations", force: :cascade do |t|
    t.integer "owner_id", null: false
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_conversations_on_name"
    t.index ["owner_id"], name: "index_conversations_on_owner_id"
  end

  create_table "direct_messages", force: :cascade do |t|
    t.integer "creator_id", null: false
    t.integer "conversation_id", null: false
    t.integer "replied_message_id"
    t.text "content", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["conversation_id"], name: "index_direct_messages_on_conversation_id"
    t.index ["creator_id"], name: "index_direct_messages_on_creator_id"
    t.index ["replied_message_id"], name: "index_direct_messages_on_replied_message_id"
  end

  create_table "friendships", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "friend_id", null: false
    t.string "status", null: false
    t.index ["friend_id"], name: "index_friendships_on_friend_id"
    t.index ["user_id"], name: "index_friendships_on_user_id"
  end

  create_table "messages", force: :cascade do |t|
    t.integer "creator_id", null: false
    t.integer "channel_id", null: false
    t.integer "replied_message_id"
    t.text "content", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["channel_id"], name: "index_messages_on_channel_id"
    t.index ["creator_id"], name: "index_messages_on_creator_id"
    t.index ["replied_message_id"], name: "index_messages_on_replied_message_id"
  end

  create_table "server_memberships", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "server_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["server_id"], name: "index_server_memberships_on_server_id"
    t.index ["user_id"], name: "index_server_memberships_on_user_id"
  end

  create_table "servers", force: :cascade do |t|
    t.integer "owner_id", null: false
    t.string "name", default: "Server", null: false
    t.boolean "is_public", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["is_public"], name: "index_servers_on_is_public"
    t.index ["name"], name: "index_servers_on_name"
    t.index ["owner_id"], name: "index_servers_on_owner_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "user_tag", default: "0001", null: false
    t.string "status", default: "offline", null: false
    t.text "description", default: "User Info", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "user_url", default: "https://i.imgur.com/Jcptpog.png", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email"
    t.index ["user_tag"], name: "index_users_on_user_tag"
    t.index ["username"], name: "index_users_on_username"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
