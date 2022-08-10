require 'faker'

ActiveRecord::Base.transaction do 
  # Users Creation
  users = []
  User.destroy_all 
  users << User.create!(email: 'demouser@thiscord.com', user_url: "https://i.imgur.com/OMcZAaz.png", username: 'Demo User', password: 'demopass', description: 'Demo Account', status: 'online')
  (1...10).each do |i|
    users << User.create!(email: 'fakeuser' + i.to_s + '@thiscord.com', user_url: "https://i.imgur.com/Jcptpog.png", username: Faker::Name.unique.name, password: 'password', description: 'Generated Account', status: 'online')
  end

  # Servers Creation
  Server.destroy_all
  server1 = Server.create!(owner_id: users[0].id, name: 'Demo Server', is_public: true)
  server2 = Server.create!(owner_id: users.sample().id, name: 'Kin Ka Circle', is_public: true)
  server3 = Server.create!(owner_id: users.sample().id, name: 'Ayce Circle', is_public: true)
  server4 = Server.create!(owner_id: users.sample().id, name: 'Spencer Circle', is_public: true)
  server5 = Server.create!(owner_id: users.sample().id, name: 'LineAlert', is_public: true)

  servers = [server1, server2, server3, server4, server5]

  # Server Memberships Creation
  ServerMembership.destroy_all
  memberships = Hash.new { |h, k| h[k] = [] }
  
  servers.drop(1).sample(2).each { |server| memberships[server.id] << ServerMembership.create!(user_id: users[0].id, server_id: server.id)}
  servers.each do |server|
    memberships[server.id] = []
    members = users.drop(1).sample(5)
    members.each do |member|
      if (member.id != server.owner_id)
        memberships[server.id] << ServerMembership.create!(user_id: member.id, server_id: server.id)
      end
    end

    memberships[server.id] << ServerMembership.create!(user_id: server.owner_id, server_id: server.id)
  end

  # Channels Creation
  Channel.destroy_all
  channels = []
  servers.each do |server|
    channels << Channel.create!(server_id: server.id, name: 'general')
    (0...3).each do |i|
      channels << Channel.create!(server_id: server.id, name: Faker::Game.title)
    end
  end

  # Messages Creation
  Message.destroy_all
  channels.each do |channel|
    (0...3).each do |i|
      Message.create!(creator_id: memberships[channel.server_id].sample().user_id, channel_id: channel.id, content: "I love " + Faker::Hobby.activity)
    end
  end

  # Friendships Creation
  Friendship.destroy_all
  friendships = []
  users.each do |user|
    friends = users.sample(5)
    friends.each do |friend|
      if (friend != user) && !Friendship.exists?(user_id: user.id, friend_id: friend.id) 
        friendships << Friendship.create!(user_id: user.id, friend_id: friend.id, status: 'resolved')
        Friendship.create!(user_id: friend.id, friend_id: user.id, status: 'resolved')
      end
    end
  end

  # Refresh conversations and messages
  Conversation.destroy_all 
  ConversationParticipant.destroy_all
  DirectMessage.destroy_all

  friendships.each do |friendship|
    new_conversation = Conversation.create!(owner_id: friendship.user_id)
    ConversationParticipant.create(participant_id: friendship.user_id, conversation_id: new_conversation.id)
    ConversationParticipant.create(participant_id: friendship.friend_id, conversation_id: new_conversation.id)

  (0...10).each do |i|
      DirectMessage.create!(creator_id: [friendship.user_id, friendship.friend_id].sample(), conversation_id: new_conversation.id, content: Faker::Movie.quote)
    end
  end
  
end