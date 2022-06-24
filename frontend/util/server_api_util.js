// Fetches the server
export const fetchServer = serverId => {
  return $.ajax({
    url: `/api/servers/${serverId}`
  })
};

// Fetches the user's joined servers
export const fetchServers = userId => {
  return $.ajax({
    url: "/api/servers",
    data: { userId }
  })
};

export const createServer = server => {
  return $.ajax({
    method: "POST",
    url: "api/servers",
    data: { server }
  });
};

export const updateServer = server => {
  return $.ajax({
    method: "PATCH",
    url: `api/servers/${server.id}`,
    data: { server }
  });
};

export const deleteServer = serverId => {
  return $.ajax({
    method: "DELETE",
    url: `api/servers/${serverId}`
  })
};