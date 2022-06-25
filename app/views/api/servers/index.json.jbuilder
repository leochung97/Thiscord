json.array! (@servers) do |server|
  json.id server.id
  json.server_name server.server_name
  json.path server.path
end