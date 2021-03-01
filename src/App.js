import React, { useEffect } from 'react';
import Tickets from './components/Tickets';
import getSearchId from './functions/getSearchId';
import './App.scss';

const App = () => {
  useEffect(() => {
    const searchId = localStorage.getItem('searchId');
    if (!searchId) {
      getSearchId();
    }
  }, []);

  return (
    <div className="container">
      <div className="column left-column" />
      <div className="column right-column">
        <Tickets />
      </div>
    </div>
  );
};

export default App;
