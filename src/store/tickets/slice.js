import { createSlice, createSelector } from '@reduxjs/toolkit';
import { getTickets } from './logic';

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    list: [],
    records: 5,
    valueOfRecords: 5,
    selectedSort: '',
  },
  reducers: {
    moreTickets: (state, { payload }) => ({ ...state, records: payload }),
    selectSort: (state, { payload }) => ({ ...state, selectedSort: payload }),
  },
  extraReducers: {
    [getTickets.fulfilled]: (state, { payload }) => ({
      ...state,
      list: payload.tickets,
    }),
  },
});

export const ticketsSelector = (state) => state.tickets;
export const selectSortedTickets = createSelector(
  ticketsSelector,
  ({ list, selectedSort }) => {
    if (!selectedSort) {
      return list;
    }
    const sortedTickets = [...list].sort((a, b) => {
      if (selectedSort === 'price') {
        return a[selectedSort] - b[selectedSort];
      }
      return a.segments[0][selectedSort] - b.segments[0][selectedSort];
    });
    return sortedTickets;
  },
);

export const selectListOfRecords = createSelector(
  selectSortedTickets,
  (state) => state.tickets.records,
  (items, records) => items.slice(0, records),
);

export const { moreTickets, selectSort } = ticketsSlice.actions;

export default ticketsSlice.reducer;
