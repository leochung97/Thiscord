# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  body       :string           not null
#  author_id  :integer          not null
#  channel_id :integer          not null
#
class Message < ApplicationRecord
  validates :body, presence: true

end
