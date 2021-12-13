import { createReducer, combineReducers, createSlice } from '@reduxjs/toolkit';
import // changeFilter,
// addContactRequest,
// addContactSuccess,
// addContactError,
// deleteContactRequest,
// deleteContactSuccess,
// deleteContactError,
// fetchContactsRequest,
// fetchContactsSuccess,
// fetchContactsError,
'./contacts-actions';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], loading: false, filter: '', error: null },
  reducers: {
    changeFilter(state, { payload }) {
      return {
        ...state,
        filter: payload,
      };
    },
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) => ({
      ...state,
      items: payload,
      loading: false,
      error: null,
    }),
    [fetchContacts.pending]: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    [fetchContacts.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message,
    }),

    [addContact.fulfilled]: (state, { payload }) => ({
      ...state,
      items: [payload, ...state.items],
      loading: false,
      error: null,
    }),
    [addContact.pending]: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    [addContact.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message,
    }),

    [deleteContact.fulfilled]: (state, { payload }) => ({
      ...state,
      items: state.items.filter(({ id }) => id !== payload.id),
      loading: false,
      error: null,
    }),
    [deleteContact.pending]: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    [deleteContact.rejected]: (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message,
    }),
  },
});

// const items = createReducer([], {
//   // [fetchContacts.fulfilled]: (_, { payload }) => payload,
//   // [addContact.fulfilled]: (prevState, { payload }) => [payload, ...prevState],
//   // [deleteContact.fulfilled]: (prevState, { payload }) =>
//   //   prevState.filter(({ id }) => id !== payload.id),
// });

// const loading = createReducer(false, {
//   // [addContact.pending]: () => true,
//   // [addContact.fulfilled]: () => false,
//   // [addContact.rejected]: () => false,
//   // [deleteContact.pending]: () => true,
//   // [deleteContact.fulfilled]: () => false,
//   // [deleteContact.rejected]: () => false,
//   // [fetchContacts.pending]: () => true,
//   // [fetchContacts.fulfilled]: () => false,
//   // [fetchContacts.rejected]: () => false,
// });

// const filter = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload,
// });

// const error = createReducer(null, {
//   // [addContact.rejected]: (_, { payload }) => payload,
//   // [deleteContact.rejected]: (_, { payload }) => payload,
//   // [fetchContacts.rejected]: (_, { payload }) => payload,
//   // [addContact.pending]: () => null,
//   // [addContact.fulfilled]: () => null,
//   // [deleteContact.pending]: () => null,
//   // [deleteContact.fulfilled]: () => null,
//   // [fetchContacts.pending]: () => null,
//   // [fetchContacts.fulfilled]: () => null,
// });

// export default combineReducers({ items, filter, loading, error });

export const contactsActions = contactsSlice.actions;

export default contactsSlice.reducer;
