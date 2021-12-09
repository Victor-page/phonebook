import { createStore } from 'redux';

const initialState = { counter: { value: 0, step: 5 } };

const reducer = (prevState = initialState, { type, payload }) => {
  switch (type) {
    case 'counter/Increment':
      return {
        ...prevState,
        counter: {
          ...prevState.counter,
          value: prevState.counter.value + payload,
        },
      };

    case 'counter/Decrement':
      return {
        ...prevState,
        counter: {
          ...prevState.counter,
          value: prevState.counter.value - payload,
        },
      };

    default:
      return prevState;
  }
};

const store = createStore(reducer);

export default store;
