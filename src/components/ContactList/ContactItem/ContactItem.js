import PropTypes from 'prop-types';

import classes from './ContactItem.module.css';

const ContactItem = ({ name, number, onDeleteContact }) => (
  <li className={classes.contact}>
    <p>
      <span>{name}</span>: <span>{number}</span>
      <button type="button" onClick={onDeleteContact}>
        Delete
      </button>
    </p>
  </li>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
