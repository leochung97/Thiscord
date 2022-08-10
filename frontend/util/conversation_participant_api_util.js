export const createConversationParticipation = (conversation_participant) => {
  return $.ajax({
    url: `/api/conversation_participants`,
    method: "POST",
    data: { conversation_participant },
  });
};

export const deleteConversationParticipation = (conversation_participant) => {
  return $.ajax({
    url: `api/conversation_participants/${conversationParticipation.id}`,
    method: "DELETE",
    data: { conversation_participant },
  });
};
