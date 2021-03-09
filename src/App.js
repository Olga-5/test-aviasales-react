import React, { useEffect } from 'react';
import { Button, Tickets, Sort } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectListOfRecords,
  ticketsSelector,
  moreTickets,
} from 'store/tickets/slice';
import getSearchId from 'store/search/logic';
import { getTickets } from 'store/tickets/logic';
import './App.scss';

const App = () => {
  const dispatch = useDispatch();
  const totalTickets = useSelector(selectListOfRecords);
  const { records, valueOfRecords, list } = useSelector(ticketsSelector);
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
        <Sort />
        <Tickets list={totalTickets} />
        {list.length > records && (
          <Button
            className="ticket-list-more-btn"
            type="button"
            onClick={() => dispatch(moreTickets(records + valueOfRecords))}
          >
            Показать еще 5 билетов!
          </Button>
        )}
      </div>
    </div>
  );
};

export default App;
