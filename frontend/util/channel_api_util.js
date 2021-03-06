export const fetchChannel = channelId => (
  $.ajax({
    url: `/api/channels/${channelId}`
  })
);

export const fetchChannels = serverId => (
  $.ajax({
    url: `/api/channels/`,
    data: { serverId }
  })
);

export const createChannel = channel => (
  $.ajax({
    method: 'POST',
    url: '/api/channels',
    data: { channel }
  })
);

export const updateChannel = channel => (
  $.ajax({
    method: 'PATCH',
    url: `/api/channels/${channel.id}`,
    data: { channel }
  })
);

export const deleteChannel = channelId => (
  $.ajax({
    method: 'DELETE',
    url: `api/channels/${channelId}`
  })
);