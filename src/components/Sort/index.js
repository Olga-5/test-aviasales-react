import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ticketsSelector, selectSort } from 'store/tickets/slice';
import classNames from 'classnames';
import './styles.scss';

const Sort = () => {
  const { selectedSort } = useSelector(ticketsSelector);
  const dispatch = useDispatch();

  const handleClick = (value) => {
    if (selectedSort === value) {
      return dispatch(selectSort(''));
    }
    return dispatch(selectSort(value));
  };

  return (
    <div className="sort">
      <div className="sort-list">
        <button
          type="button"
          className={classNames('sort-item', {
            active: selectedSort === 'price',
          })}
          onClick={() => handleClick('price')}
        >
          Самый дешевый
        </button>
        <button
          type="button"
          className={classNames('sort-item', {
            active: selectedSort === 'duration',
          })}
          onClick={() => handleClick('duration')}
        >
          Самый быстрый
        </button>
      </div>
    </div>
  );
};

export default Sort;
