import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contacts-operations';
import ContactItem from './ContactItem';
import {
  getVisibleContacts,
  getIsLoadingContacts,
  getError,
} from 'redux/contacts/contacts-selectors';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(getIsLoadingContacts);

  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deleteContactHandler = (id) => dispatch(deleteContact(id));

  return (
    <>
      {isLoadingContacts && <h2>Loading...</h2>}
      {error && !isLoadingContacts && <h2>{error}</h2>}
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
    </>
  );
};

export default ContactList;
