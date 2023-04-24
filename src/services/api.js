import axios from 'axios';

axios.defaults.baseURL = 'https://6446ab580431e885f018cc7c.mockapi.io';

export async function fetchUsers() {
  const response = await axios.get('/users', {
    params: {
      page: 1,
      limit: 3,
    },
  });
  return response.data;
}
