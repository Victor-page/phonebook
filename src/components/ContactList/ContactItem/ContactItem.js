import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/contacts-slice';
import classes from './ContactItem.module.css';

const ContactItem = ({
  name,
  number,
  id,
  // onDeleteContact
}) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <li className={classes.contact}>
      <p>
        <span>{name}</span>: <span>{number}</span>
        <button
          type="button"
          onClick={() => deleteContact(id)}
          disabled={isDeleting}
        >
          {isDeleting ? 'Deleting...' : 'Delete'}
        </button>
      </p>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  // onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
