json.extract! user, :id, :username, :email, :user_tag

if user.user_url == nil 
  json.user_url ""
else 
  json.user_url user.user_url
end

json.servers user.servers.map(&:id)
json.conversations user.conversations.map(&:id)
json.direct_messages user.direct_messages.map(&:id)
json.messages user.messages.map(&:id)