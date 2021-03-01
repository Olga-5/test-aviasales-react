/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getTickets } from './logic';

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    list: [],
  },
  extraReducers: {
    [getTickets.fulfilled]: (state, { payload }) => {
      state.list = payload.tickets;
    },
  },
});

export const ticketsSelector = (state) => state.tickets;
export default ticketsSlice.reducer;
