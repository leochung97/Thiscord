# == Schema Information
#
# Table name: server_channels
#
#  id         :bigint           not null, primary key
#  server_id  :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ServerChannel < ApplicationRecord
  validates :server_id, :channel_id, presence: true
  
  belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server
  
  belongs_to :channel,
    foreign_key: :channel_id,
    class_name: :Channel
end
