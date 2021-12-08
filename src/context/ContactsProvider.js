import { useState, useEffect } from 'react';
import contactsContext from './contactsContext';
import { generate } from 'shortid';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState(initialContacts);

  useEffect(() => {
    setContacts(JSON.parse(localStorage.getItem('contacts')));
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const findConcurrence = (enteredName, enteredNumber) =>
    contacts.find(
      ({ name, number }) => name === enteredName || number === enteredNumber
    );

  const addContact = (name, number) => {
    const concurrence = findConcurrence(name, number);
    if (concurrence) {
      alert(concurrence.name + ' is already in contacts.');
      return;
    }

    const contact = { id: generate(), name, number };

    setContacts((prevState) => [contact, ...prevState]);
  };

  const deleteContact = (contactId) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== contactId)
    );
  };

  return (
    <contactsContext.Provider value={{ contacts, addContact, deleteContact }}>
      {children}
    </contactsContext.Provider>
  );
};

export default ContactsProvider;
