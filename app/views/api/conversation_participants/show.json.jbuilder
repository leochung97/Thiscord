json.extract! @conversation_participant, :id, :participant_id, :conversation_id

json.conversation do 
  json.partial! "api/conversations/conversation", conversation: @conversation
end