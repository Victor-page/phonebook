import { Switch, Route } from 'react-router-dom';
import Form from 'components/Form';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
// import Counter from 'components/Counter';
import Container from 'components/Container';

const App = () => (
  <Container>
    <h1>Phonebook</h1>
    <Form />

    <h2>Contacts</h2>
    <Filter />

    <ContactList />

    {/* <Counter /> */}
  </Container>
);

export default App;
