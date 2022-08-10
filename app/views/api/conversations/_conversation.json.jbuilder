json.extract! conversation, :id, :owner_id

json.users do 
  conversation.participants.each do |user|
    json.set! user.id do 
      json.partial! "api/users/user", user: user
    end
  end
end

json.direct_messages do
  conversation.direct_messages.each do |direct_message|
    json.set! direct_message.id do
      json.partial! "api/direct_messages/direct_message", direct_message: direct_message
    end
  end
end

json.currentUser do 
  json.partial! "api/users/user", user: current_user
end