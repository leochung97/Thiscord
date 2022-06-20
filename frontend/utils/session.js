// Register
export const postUser = user => (
  $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user }
  })
);

// Login
export const postSession = user => (
  $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user }
  })
);

// Logout
export const deleteSession = () => (
  $.ajax({
    url: '/api/session',
    method: 'DELETE'
  })
);