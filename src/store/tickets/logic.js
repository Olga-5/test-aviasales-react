import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api';

export const getTickets = createAsyncThunk('getTickets', async () => {
  const { searchId } = localStorage;
  const { data } = await api.get(`/tickets?searchId=${searchId}`);
  return data;
});
