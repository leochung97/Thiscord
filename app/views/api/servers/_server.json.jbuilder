json.extract! server, :id, :name, :is_public, :owner_id

json.channels do 
  server.channels.each do |channel|
    json.set! channel.id do
      json.partial! "api/channels/channel", channel: channel
    end
  end
end

json.users do 
  server.members.each do |member|
    json.set! member.id do
      json.partial! "api/users/user", user: member
    end
  end
end

json.currentUser do 
  json.partial! "api/users/user", user: current_user
end