export const fetchDirectMessage = (directMessageId) => {
  return $.ajax({
    method: "GET",
    url: `api/direct_messages/${directMessageId}`,
  });
};

export const createDirectMessage = (conversationId, directMessage) => {
  return $.ajax({
    method: "POST",
    url: `api/conversations/${conversationId}/direct_messages`,
    data: { direct_message: directMessage },
  });
};

export const updateDirectMessage = (directMessage) => {
  return $.ajax({
    method: "PATCH",
    url: `api/direct_messages/${directMessage.id}`,
    data: { direct_message: directMessage },
  });
};

export const deleteDirectMessage = (directMessageId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/direct_messages/${directMessageId}`,
  });
};

