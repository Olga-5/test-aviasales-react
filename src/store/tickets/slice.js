import { createSlice, createSelector } from '@reduxjs/toolkit';
import { getTickets } from './logic';

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    list: [],
    records: 5,
    valueOfRecords: 5,
  },
  reducers: {
    moreTickets: (state, { payload }) => ({ ...state, records: payload }),
  },
  extraReducers: {
    [getTickets.fulfilled]: (state, { payload }) => ({
      ...state,
      list: payload.tickets,
    }),
  },
});

export const ticketsSelector = (state) => state.tickets;
export const selectListOfRecords = createSelector(ticketsSelector, (tickets) =>
  tickets.list.slice(0, tickets.records),
);

export const { moreTickets } = ticketsSlice.actions;
export default ticketsSlice.reducer;
