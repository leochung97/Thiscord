class Conversation < ApplicationRecord
      validates :owner_id, presence: true 
      
      belongs_to :owner, foreign_key: :owner_id, class_name: :User
      has_many :conversation_participants, foreign_key: :conversation_id, class_name: :ConversationParticipant
      has_many :participants, through: :conversation_participants, source: :participant
      has_many :direct_messages, foreign_key: :conversation_id, class_name: :DirectMessage
end