// import { useEffect } from 'react';
import {
  useSelector,
  // useDispatch
} from 'react-redux';
import {
  //  contactsOperations,
  contactsSelectors,
} from 'redux/contacts';
import ContactItem from './ContactItem';
import { useFetchContactsQuery } from 'redux/contacts/contacts-slice';

const getVisibleContacts = (contacts, filterValue) => {
  const normalizedFilter = filterValue.toLowerCase();

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const ContactList = () => {
  // const contacts = useSelector(contactsSelectors.getVisibleContacts);
  // const dispatch = useDispatch();
  // const isLoadingContacts = useSelector(contactsSelectors.getIsLoadingContacts);

  // const error = useSelector(contactsSelectors.getError);
  const filterValue = useSelector(contactsSelectors.getFilter);

  const {
    data: contacts = [],
    isLoading: isLoadingForTheFirstTime,
    error,
  } = useFetchContactsQuery();

  const visibleContacts = getVisibleContacts(contacts, filterValue);

  // useEffect(() => {
  //   dispatch(contactsOperations.fetchContacts());
  // }, [dispatch]);

  // const deleteContactHandler = (id) =>
  //   dispatch(contactsOperations.deleteContact(id));

  return (
    <>
      {isLoadingForTheFirstTime && <h2>Loading...</h2>}
      {error && !isLoadingForTheFirstTime && <h2>{error?.data?.message}</h2>}
      {visibleContacts.length !== 0 && (
        <ul>
          {visibleContacts.map(({ id, name, number }) => (
            <ContactItem
              key={id}
              name={name}
              number={number}
              id={id}
              // onDeleteContact={() => deleteContact(id)}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
