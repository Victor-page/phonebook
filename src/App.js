import { Component } from 'react';

import { generate } from 'shortid';

import Form from 'components/Form';
import Filter from 'components/Filter';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

class App extends Component {
  state = { contacts: initialContacts, filter: '' };

  addContact = (name, number) => {
    const contact = { id: generate(), name, number };

    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  createContact = ({ id, name, number }) => {
    return (
      <li key={id}>
        <p>{name}</p>
        <p>{number}</p>
      </li>
    );
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <Form onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <h3>Find contacts by name</h3>
        <Filter />
        <ul>{this.state.contacts.map(this.createContact)}</ul>
      </div>
    );
  }
}

export default App;
