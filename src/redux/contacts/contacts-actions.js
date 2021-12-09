import { generate } from 'shortid';
import { ADD, DELETE, CHANGE_FILTER } from './contacts-types';

const addContact = (name, number) => ({
  type: ADD,
  payload: { id: generate(), name, number },
});

const deleteContact = (contactId) => ({ type: DELETE, payload: contactId });

const changeFilter = (filterValue) => ({
  type: CHANGE_FILTER,
  payload: filterValue,
});

const contactsAction = { addContact, deleteContact, changeFilter };

export default contactsAction;
