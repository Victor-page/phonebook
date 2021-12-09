import { useContext } from 'react';
import contactsCtx from 'context/contactsContext';
import filterCtx from 'context/filterContext';

import Form from 'components/Form';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Counter from 'components/Counter';

const App = () => {
  const { contacts, addContact, deleteContact } = useContext(contactsCtx);

  const { filter, changeFilter } = useContext(filterCtx);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />

      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
      <hr />
      <Counter />
    </div>
  );
};

export default App;
