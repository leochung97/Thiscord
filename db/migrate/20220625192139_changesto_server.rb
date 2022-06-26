class ChangestoServer < ActiveRecord::Migration[5.2]
  def change
    remove_column :servers, :path
  end
end
