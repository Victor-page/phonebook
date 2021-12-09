import Form from 'components/Form';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Counter from 'components/Counter';

const App = () => (
  <div>
    <h1>Phonebook</h1>
    <Form />

    <h2>Contacts</h2>
    <Filter />

    <ContactList />
    <hr />
    <Counter />
  </div>
);

export default App;
