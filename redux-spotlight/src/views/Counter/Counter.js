import React from 'react';

const Counter = () => {
  // The function below is called a selector and alows us to select a value from
  // the state.

  return (
    <div>
      <button
        aria-label="Decrement value"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        aria-label="Increment value"
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
