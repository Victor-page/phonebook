import { useState, useEffect } from 'react';

import { generate } from 'shortid';

import Form from 'components/Form';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

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

  const changeFilter = ({ currentTarget: { value: filterValue } }) => {
    setFilter(filterValue);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />

      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </div>
  );
};

export default App;
