import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api';

export const getTickets = createAsyncThunk('getTickets', async () => {
  const { data } = await api.get(`/tickets`);
  return data;
});
