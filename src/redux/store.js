import { createStore } from 'redux';

const initialState = { counterValue: 0 };

const reducer = (prevState = initialState, { type, payload }) => {
  switch (type) {
    case 'counter/Increment':
      return {
        counterValue: prevState.counterValue + payload,
      };

    case 'counter/Decrement':
      return {
        counterValue: prevState.counterValue - payload,
      };

    default:
      return prevState;
  }
};

const store = createStore(reducer);

export default store;
