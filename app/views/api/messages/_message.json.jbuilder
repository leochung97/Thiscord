json.extract! message, :id, :channel_id, :content, :created_at

json.user message.author, :id, :username