import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/contacts-actions';

import ContactItem from './ContactItem';

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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = (state) => {
  const { filter, items } = state.contacts;
  const visibleContacts = getVisibleContacts(items, filter);

  return { contacts: visibleContacts };
};

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
