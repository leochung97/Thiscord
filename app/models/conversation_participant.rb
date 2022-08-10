class ConversationParticipant < ApplicationRecord
      validates :conversation_id, :participant_id, presence: true 
      
      belongs_to :conversation, foreign_key: :conversation_id, class_name: :Conversation 
      belongs_to :participant, foreign_key: :participant_id, class_name: :User 
end