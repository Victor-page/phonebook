import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  changeFilter,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contacts-actions';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (prevState, { payload }) => [payload, ...prevState],
  [deleteContactSuccess]: (prevState, { payload }) =>
    prevState.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [addContactError]: (_, { payload }) => payload,
  [deleteContactError]: (_, { payload }) => payload,
  [fetchContactsError]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter, loading, error });
