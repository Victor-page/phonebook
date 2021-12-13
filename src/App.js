import Form from 'components/Form';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
// import Counter from 'components/Counter';
// import Pokemon from 'components/Pokemon';

const App = () => (
  <div>
    <h1>Phonebook</h1>
    <Form />

    <h2>Contacts</h2>
    <Filter />

    <ContactList />

    {/* <Counter /> */}

    {/* <Pokemon /> */}
  </div>
);

export default App;
