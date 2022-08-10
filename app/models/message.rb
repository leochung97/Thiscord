class Message < ApplicationRecord
      validates :creator_id, presence: true
      validates :content, presence: true
      validates :channel_id, presence: true 

      belongs_to :author, foreign_key: :creator_id, class_name: :User
      belongs_to :channel, foreign_key: :channel_id, class_name: :Channel
end