// Fetches the server
export const fetchServer = serverId => (
  $.ajax({
    url: `/api/servers/${serverId}`
  })
);

// Fetches the user's joined servers
export const fetchServers = userId => (
  $.ajax({
    url: "/api/servers",
    data: { userId }
  })
);

export const createServer = server => (
  $.ajax({
    method: "POST",
    url: "api/servers",
    data: { server }
  })
);

export const updateServer = server => (
  $.ajax({
    method: "PATCH",
    url: `api/servers/${server.id}`,
    data: { server }
  })
);

export const deleteServer = serverId => (
  $.ajax({
    method: "DELETE",
    url: `api/servers/${serverId}`
  })
);