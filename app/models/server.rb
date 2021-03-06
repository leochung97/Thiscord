# == Schema Information
#
# Table name: servers
#
#  id          :bigint           not null, primary key
#  admin_id    :integer          not null
#  server_name :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Server < ApplicationRecord
  validates :admin_id, :server_name, presence: true

  belongs_to :admin,
    foreign_key: :admin_id,
    class_name: :User

  has_many :memberships,
    foreign_key: :server_id,
    class_name: :ServerMember

  has_many :members,
    through: :memberships,
    source: :member

  has_many :channels,
    foreign_key: :server_id,
    class_name: :Channel,
    dependent: :destroy

  has_many :messages,
    through: :channels,
    source: :messages
end
