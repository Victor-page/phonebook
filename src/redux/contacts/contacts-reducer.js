import { combineReducers } from 'redux';
import { ADD, DELETE, CHANGE_FILTER } from './contacts-types';

const items = (prevState = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return [payload, ...prevState];

    case DELETE:
      return prevState.filter((contact) => contact.id !== payload);

    default:
      return prevState;
  }
};

const filter = (prevState = '', { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload;

    default:
      return prevState;
  }
};

export default combineReducers({ items, filter });
