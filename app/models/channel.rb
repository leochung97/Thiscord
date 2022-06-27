# == Schema Information
#
# Table name: channels
#
#  id           :bigint           not null, primary key
#  channel_name :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  admin_id     :integer          not null
#
class Channel < ApplicationRecord
  validates :admin_id, :server_name, presence: true

  belongs_to :admin,
    foreign_key: :admin_id,
    class_name: :User

  has_many :servers_partof,
    foreign_key: :channel_id,
    class_name: :ServerChannel

  has_many :servers,
    through: :servers_partof,
    source: :server
end