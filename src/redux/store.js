import { createStore } from 'redux';

const reducer = (
  state = {
    a: 5,
  },
  action
) => {
  console.log('reducer', action);
  return state;
};

const store = createStore(reducer, { a: 15 });

export default store;
