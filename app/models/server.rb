class Server < ApplicationRecord 
      validates :owner_id, presence: true
      validates :name, presence: true 
      validates :is_public, inclusion: {in: [true, false]}

      belongs_to :owner, 
            foreign_key: :owner_id, 
            class_name: :User

      has_many :server_memberships,
            foreign_key: :server_id,
            class_name: :ServerMembership, 
            dependent: :destroy
      
      has_many :channels, 
            foreign_key: :server_id, 
            class_name: :Channel
      
      has_many :members, 
            through: :server_memberships, 
            source: :user
end