class DirectMessage < ApplicationRecord
      validates :creator_id, presence: true
      validates :content, presence: true
      validates :conversation_id, presence: true 

      belongs_to :author, foreign_key: :creator_id, class_name: :User
      belongs_to :conversation, foreign_key: :conversation_id, class_name: :Conversation
end