class ServerChannel < ApplicationRecord
  validates :server_id, :channel_id, presence: true
  
  belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server
  
  belongs_to :text_channel,
    foreign_key: :text_channel_id,
    class_name: :TextChannel
end
