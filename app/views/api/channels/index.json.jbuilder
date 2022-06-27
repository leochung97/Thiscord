json.array! (@channels) do |channel|
  json.id channel.id
  json.channel_name channel.channel_name
end