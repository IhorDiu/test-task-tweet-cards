import axios from 'axios';

axios.defaults.baseURL = 'https://6446ab580431e885f018cc7c.mockapi.io';
// export const PER_PAGE = 3;

export async function fetchUsers(page) {
  const response = await axios.get('/users', {
    params: {
      completed: false,
      page: page,
      limit: 3,
    },
  });
  return response.data;
}
