# == Schema Information
#
# Table name: channel_messages
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  author_id  :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class ChannelMessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
