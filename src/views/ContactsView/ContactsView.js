import Form from 'components/Form';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

const ContactsView = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <Form />

      <h2>Contacts</h2>
      <Filter />

      <ContactList />
    </>
  );
};

export default ContactsView;
