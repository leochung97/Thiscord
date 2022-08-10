export const createServerMembership = (server_membership) => {
  return $.ajax({
    url: `/api/server_memberships`,
    method: "POST",
    data: { server_membership },
  });
};

export const deleteServerMembership = (server_membership) => {
  return $.ajax({
    url: `/api/server_memberships/${server_membership.id}`,
    method: "DELETE",
    data: { server_membership },
  });
};
