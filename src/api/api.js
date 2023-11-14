import axios from 'axios';

export const Api = {
  getPriofile: async (userId, accessToken) => {
    const response = await axios.get(
      `https://euphoriadb.onrender.com/600/users/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  },

  register: async data => {
    const response = await axios
      .post('https://euphoriadb.onrender.com/register', data)
      .catch(err => {
        throw new Error(err.response.data);
      });
    return response.data;
  },

  login: async data => {
    const response = await axios
      .post('https://euphoriadb.onrender.com/login', data)
      .catch(err => {
        throw new Error(err.response.data);
      });
    return response.data;
  },

  addOrder: async (userId, accessToken, data) => {
    const response = await axios.patch(
      `https://euphoriadb.onrender.com/600/users/${userId}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  },
};
