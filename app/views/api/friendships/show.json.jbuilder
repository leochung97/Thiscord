json.extract! @friendship, :id, :user_id, :friend_id

json.conversation do 
  json.partial! "api/conversations/conversation", conversation: @conversation
end