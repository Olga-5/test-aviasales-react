import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api';

const getSearchId = createAsyncThunk('getSearchId', async () => {
  const { data } = await api.get(`/search`);
  localStorage.setItem('searchId', data.searchId);
  api.defaults.params = {};
  api.defaults.params.searchId = data.searchId;
  return data.searchId;
});

export default getSearchId;
