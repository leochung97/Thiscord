class ChangestoUser < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :password_digst
    add_column :users, :password_digest, :string, null: false
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
