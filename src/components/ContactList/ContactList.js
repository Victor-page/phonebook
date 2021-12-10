import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-actions';
import ContactItem from './ContactItem';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const deleteContactHandler = (id) => dispatch(deleteContact(id));

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={() => deleteContactHandler(id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
