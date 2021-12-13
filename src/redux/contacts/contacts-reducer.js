import { createReducer, combineReducers, createSlice } from '@reduxjs/toolkit';
import {
  changeFilter,
  // addContactRequest,
  // addContactSuccess,
  // addContactError,
  // deleteContactRequest,
  // deleteContactSuccess,
  // deleteContactError,
  // fetchContactsRequest,
  // fetchContactsSuccess,
  // fetchContactsError,
} from './contacts-actions';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';

const items = createSlice({
  name: 'items',
  initialState: { items: [], filter: '', error: null },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => ({
      ...state,
      items: action.payload,
    }),

    [fetchContacts.rejected]: (state, action) =>
      (state.error = action.error.message),
    [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
    [deleteContact.fulfilled]: (state, { payload }) =>
      state.filter(({ id }) => id !== payload.id),
  },
});

const loading = createSlice({
  name: 'loading',
  initialState: { loading: false },
  extraReducers: {
    [fetchContacts.pending]: (state) => ({ ...state, isLoading: true }),
  },
});

// const items = createReducer([], {
//   [fetchContacts.fulfilled]: (_, { payload }) => payload,
//   [addContact.fulfilled]: (prevState, { payload }) => [payload, ...prevState],
//   [deleteContact.fulfilled]: (prevState, { payload }) =>
//     prevState.filter(({ id }) => id !== payload.id),
// });

const loading = createReducer(false, {
  // [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  // [addContact.rejected]: () => false,
  // [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  // [deleteContact.rejected]: () => false,
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [addContact.rejected]: (_, { payload }) => payload,
  [deleteContact.rejected]: (_, { payload }) => payload,
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [addContact.pending]: () => null,
  [addContact.fulfilled]: () => null,
  [deleteContact.pending]: () => null,
  [deleteContact.fulfilled]: () => null,
  [fetchContacts.pending]: () => null,
  [fetchContacts.fulfilled]: () => null,
});

// export default combineReducers({ items, filter, loading, error });

export default items.reducer;
