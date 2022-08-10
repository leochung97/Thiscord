export const fetchConversations = () => {
  return $.ajax({
    method: "GET",
    url: `api/conversations`,
  });
};

export const fetchConversation = (conversationId) => {
  return $.ajax({
    method: "GET",
    url: `api/conversations/${conversationId}`,
  });
};

export const createConversation = () => {
  return $.ajax({
    method: "POST",
    url: `api/conversations`,
  });
};

export const deleteConversation = (conversationId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/conversations/${conversationId}`,
  });
};
