import { combineReducers } from 'redux';
import { INCREMENT, DECREMENT } from './counter-types';

const valueReducer = (prevState = 0, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return prevState + payload;

    case DECREMENT:
      return prevState - payload;

    default:
      return prevState;
  }
};

const stepReducer = (prevState = 15, action) => prevState;

const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});

export default counterReducer;
