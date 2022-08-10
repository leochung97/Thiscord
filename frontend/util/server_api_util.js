export const fetchServers = () => {
  return $.ajax({
    method: "GET",
    url: `api/servers`,
  });
};

export const fetchServer = (serverId) => {
  return $.ajax({
    method: "GET",
    url: `api/servers/${serverId}`,
  });
};

export const createServer = (server) => {
  return $.ajax({
    method: "POST",
    url: `api/servers/`,
    data: { server: server },
  });
};

export const editServer = (server) => {
  return $.ajax({
    method: "PATCH",
    url: `api/servers/${server.id}`,
    data: { server: server },
  });
};

export const deleteServer = (serverId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/servers/${serverId}`,
  });
};

export const serverInitial = (server) => {
  let serverInitial = "";
  const words = server.name.split(" ");
  words.map((word) => (serverInitial += word[0]));
  return serverInitial;
};
