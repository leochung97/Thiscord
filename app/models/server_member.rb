# == Schema Information
#
# Table name: server_members
#
#  id         :bigint           not null, primary key
#  server_id  :integer          not null
#  member_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ServerMember < ApplicationRecord
  validates :member_id, :server_id, presence: true

  belongs_to :member,
    foreign_key: :member_id,
    class_name: :User

  belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server
end
