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
require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
