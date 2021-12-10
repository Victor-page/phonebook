import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { deleteContact, addContact, changeFilter } from './contacts-actions';

const items = createReducer([], {
  [addContact]: (prevState, { payload }) => [payload, ...prevState],
  [deleteContact]: (prevState, { payload }) =>
    prevState.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });
