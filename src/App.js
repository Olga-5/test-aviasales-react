import React, { useEffect } from 'react';
import Tickets from 'components/Tickets';
import { useDispatch, useSelector } from 'react-redux';
import { ticketsSelector } from 'store/tickets/slice';
import getSearchId from 'store/search/logic';
import { getTickets } from 'store/tickets/logic';
import './App.scss';

const App = () => {
  const dispatch = useDispatch();
  const tickets = useSelector(ticketsSelector);
  useEffect(() => {
    const getData = async () => {
      const { searchId } = localStorage;
      if (!searchId) {
        await dispatch(getSearchId());
      }
      await dispatch(getTickets());
    };
    getData();
  }, [dispatch]);

  return (
    <div className="container">
      <div className="column left-column" />
      <div className="column right-column">
        <Tickets list={tickets.list} />
      </div>
    </div>
  );
};

export default App;
