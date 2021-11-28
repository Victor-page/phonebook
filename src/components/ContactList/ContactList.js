import ContactItem from './ContactItem/ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        name={name}
        number={number}
        id={id}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ul>
);

export default ContactList;
