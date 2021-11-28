import { Component } from 'react';

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

class App extends Component {
  state = { contacts: initialContacts, filter: '' };

  findConcurrence = (enteredName, enteredNumber) =>
    this.state.contacts.find(
      ({ name, number }) => name === enteredName || number === enteredNumber
    );

  addContact = (name, number) => {
    const concurrence = this.findConcurrence(name, number);
    if (concurrence) {
      alert(concurrence.name + ' is already in contacts.');
      return;
    }

    const contact = { id: generate(), name, number };

    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  changeFilter = ({ currentTarget: { value: filterValue } }) => {
    this.setState({ filter: filterValue });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />

        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
