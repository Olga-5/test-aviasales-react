import { configureStore } from '@reduxjs/toolkit';
import ticketsReducer from './tickets/slice';

export default configureStore({
  reducer: {
    tickets: ticketsReducer,
  },
});
