class Server < ApplicationRecord
  validates :admin_id, :server_name, presence: true

  belongs_to :admin,
    foreign_key: :admin_id,
    class_name: :User

  
end
