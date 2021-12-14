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

const ContactList = () => {
  // const contacts = useSelector(contactsSelectors.getVisibleContacts);
  // const dispatch = useDispatch();
  // const isLoadingContacts = useSelector(contactsSelectors.getIsLoadingContacts);

  // const error = useSelector(contactsSelectors.getError);

  const { isLoading: isLoadingForTheFirstTime, error } =
    useFetchContactsQuery();
  const visibleContacts = useSelector(contactsSelectors.getVisibleContacts);

  // useEffect(() => {
  //   dispatch(contactsOperations.fetchContacts());
  // }, [dispatch]);

  // const deleteContactHandler = (id) =>
  //   dispatch(contactsOperations.deleteContact(id));

  return (
    <>
      {isLoadingForTheFirstTime && <h2>Loading...</h2>}
      {error && !isLoadingForTheFirstTime && <h2>{error}</h2>}
      {visibleContacts && (
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
