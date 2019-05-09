import React from 'react';
import store from './store';

const Counter = props => {
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
            id: props.id,
            amount: 1,
          })
        }
      >
        <i className="up chevron icon" />
      </button>
      <div>{props.qty}</div>
      <button
        onClick={() =>
          store.dispatch({
            type: 'DECREMENT',
            id: props.id,
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
