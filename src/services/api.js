import axios from 'axios';

axios.defaults.baseURL = 'https://6446ab580431e885f018cc7c.mockapi.io';

export async function fetchUsers(page) {
  const response = await axios.get('/users', {
    params: {
      page: page,
      limit: 3,
    },
  });
  return response.data;
}

export async function updateFollowers(id, followers) {
  await axios.put(`/users/${id}`, { followers });
}
