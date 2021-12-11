import axios from 'axios';
import {
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

axios.defaults.baseURL = 'https://61b44d0559c6ac0017300fbe.mockapi.io';
const contactsEndpoint = '/contacts';

export const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactsRequest());
  axios
    .get(contactsEndpoint)
    .then(({ data }) => {
      dispatch(fetchContactsSuccess(data));
    })
    .catch(({ message }) => {
      dispatch(fetchContactsError(message));
    });
};

export const addContact = (name, number) => (dispatch) => {
  const contact = { name, number };

  dispatch(addContactRequest());
  axios
    .post(contactsEndpoint, contact)
    .then(({ data }) => {
      console.log(data);
      dispatch(addContactSuccess(data));
    })
    .catch(({ message }) => {
      dispatch(addContactError(message));
    });
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());
  axios
    .delete(`${contactsEndpoint}/${id}`)
    .then(({ data }) => {
      dispatch(deleteContactSuccess(data.id));
    })
    .catch(({ message }) => {
      dispatch(deleteContactError(message));
    });
};
