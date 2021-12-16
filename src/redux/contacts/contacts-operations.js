import { contactsAxios } from '../axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   deleteContactRequest,
//   deleteContactSuccess,
//   deleteContactError,
//   fetchContactsRequest,
//   fetchContactsSuccess,
//   fetchContactsError,
// } from './contacts-actions';

// axios.defaults.baseURL = 'https://61b44d0559c6ac0017300fbe.mockapi.io';

const contactsEndpoint = '/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const { data } = await contactsAxios.get(contactsEndpoint);
    return data;
  }
);

// export const fetchContacts = () => (dispatch) => {
//   dispatch(fetchContactsRequest());
//   contactsAxios
//     .get(contactsEndpoint)
//     .then(({ data }) => {
//       dispatch(fetchContactsSuccess(data));
//     })
//     .catch(({ message }) => {
//       dispatch(fetchContactsError(message));
//     });
// };

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact) => {
    const { data } = await contactsAxios.post(contactsEndpoint, contact);
    return data;
  }
);

// export const addContact = (name, number) => (dispatch) => {
//   const contact = { name, number };

//   dispatch(addContactRequest());
//   contactsAxios
//     .post(contactsEndpoint, contact)
//     .then(({ data }) => {
//       dispatch(addContactSuccess(data));
//     })
//     .catch(({ message }) => {
//       dispatch(addContactError(message));
//     });
// };

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id) => {
    const { data } = await contactsAxios.delete(`${contactsEndpoint}/${id}`);
    return data;
  }
);

// export const deleteContact = (id) => (dispatch) => {
//   dispatch(deleteContactRequest());
//   axios
//     .delete(`${contactsEndpoint}/${id}`)
//     .then(({ data }) => {
//       dispatch(deleteContactSuccess(data.id));
//     })
//     .catch(({ message }) => {
//       dispatch(deleteContactError(message));
//     });
// };
