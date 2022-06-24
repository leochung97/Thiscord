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
require 'test_helper'

class ServerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
