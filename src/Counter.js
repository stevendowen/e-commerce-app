import React from 'react';
import store from './store';

const Counter = () => {
  return (
    <div
      style={{
        position: 'absolute',
        right: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div>Quantity</div>
      <button
        onClick={() =>
          store.dispatch({
            type: 'INCREMENT',
            amount: 1,
          })
        }
      >
        <i className="up chevron icon" />
      </button>
      <div>{store.getState().counter}</div>
      <button
        onClick={() =>
          store.dispatch({
            type: 'DECREMENT',
            amount: 1,
          })
        }
      >
        <i className="down chevron icon" />
      </button>
    </div>
  );
};

export default Counter;
