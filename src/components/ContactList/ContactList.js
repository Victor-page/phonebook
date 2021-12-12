import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import ContactItem from './ContactItem';

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(contactsSelectors.getIsLoadingContacts);

  const error = useSelector(contactsSelectors.getError);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const deleteContactHandler = (id) =>
    dispatch(contactsOperations.deleteContact(id));

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
