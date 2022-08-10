class Channel < ApplicationRecord 
      validates :server_id, presence: true
      validates :name, presence: true, uniqueness: { scope: :server_id }

      belongs_to :server, foreign_key: :server_id, class_name: :Server 
      has_many :messages, foreign_key: :channel_id, class_name: :Message, dependent: :destroy
end