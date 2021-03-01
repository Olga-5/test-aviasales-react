/* eslint-disable no-console */
import api from '../api';

export default async () => {
  try {
    const { data } = await api.get('/search');
    localStorage.setItem('searchId', data.searchId);
  } catch (err) {
    console.error(err);
  }
};
