import React, { Fragment } from 'react';
import numberWithSpaces from 'functions/numberWithSpaces';
import getTimeFromMins from 'functions/getTimeFromMins';
import getFlightTime from 'functions/getFlightTime';
import PropTypes from 'prop-types';
import './styles.scss';

const renderTitleStops = (stops) => {
  const numberOfStops = stops.length;
  if (numberOfStops === 1) {
    return `${numberOfStops} пересадка`;
  }
  if (!numberOfStops || numberOfStops >= 5) {
    return `${numberOfStops} пересадок`;
  }
  return `${numberOfStops} пересадки`;
};

const Tickets = ({ list }) => (
  <ul className="tickets-list">
    {list.map((ticket) => (
      <li key={`${ticket.price}-${ticket.carrier}`} className="ticket-item">
        <div className="ticket-item-header">
          <p className="ticket-header-price">
            {`${numberWithSpaces(ticket.price)} P`}
          </p>
          <img
            className="ticket-header-logo"
            src="https://pics.avs.io/99/36/S7@2x.png"
            alt="logo"
          />
        </div>
        <div className="ticket-item-content">
          {ticket.segments.map((segment) => {
            const { hours, minutes } = getTimeFromMins(segment.duration);
            const { departureTime, arrivalTime } = getFlightTime(
              segment.date,
              segment.duration,
            );
            return (
              <Fragment key={`${segment.duration}-${segment.origin}`}>
                <div className="ticket-content-direction">
                  <p className="content-title">{`${segment.origin} - ${segment.destination}`}</p>
                  <p className="content-value">{`${departureTime} - ${arrivalTime}`}</p>
                </div>
                <div className="ticket-content-duration">
                  <p className="content-title">В пути</p>
                  <p className="content-value">{`${hours}ч ${minutes}м`}</p>
                </div>
                <div className="ticket-content-stops">
                  <p className="content-title">
                    {renderTitleStops(segment.stops)}
                  </p>
                  <p className="content-value">{segment.stops.join(', ')}</p>
                </div>
              </Fragment>
            );
          })}
        </div>
      </li>
    ))}
  </ul>
);

Tickets.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Tickets;
