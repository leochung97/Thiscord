# == Schema Information
#
# Table name: servers
#
#  id          :bigint           not null, primary key
#  admin_id    :integer          not null
#  server_name :string           not null
#  path        :string           not null
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

  # has_many :server_channels,
  #   foreign_key: :server_id,
  #   class_name: :ServerChannel

  # has_many :text_channels,
  #   through: :server_channels,
  #   source: :text_channel
end
