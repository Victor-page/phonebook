import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { contactsOperations, contactsSelectors } from 'redux/contacts';
import ContactItem from './ContactItem';
import { useFetchContactsQuery } from 'redux/contacts/contacts-slice';

const ContactList = () => {
  // const contacts = useSelector(contactsSelectors.getVisibleContacts);
  // const dispatch = useDispatch();
  // const isLoadingContacts = useSelector(contactsSelectors.getIsLoadingContacts);

  // const error = useSelector(contactsSelectors.getError);

  const { data: contacts, isFetching, error } = useFetchContactsQuery();

  // useEffect(() => {
  //   dispatch(contactsOperations.fetchContacts());
  // }, [dispatch]);

  // const deleteContactHandler = (id) =>
  //   dispatch(contactsOperations.deleteContact(id));

  return (
    <>
      {isFetching && <h2>Loading...</h2>}
      {error && !isFetching && <h2>{error}</h2>}
      {contacts && (
        <ul>
          {contacts.map(({ id, name, number }) => (
            <ContactItem
              key={id}
              name={name}
              number={number}
              // onDeleteContact={() => deleteContactHandler(id)}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
