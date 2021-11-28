import classes from './ContactItem.module.css';

const ContactItem = ({ name, number, id, onDeleteContact }) => (
  <li className={classes.contact}>
    <p>
      <span>{name}</span>: <span>{number}</span>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </p>
  </li>
);

export default ContactItem;
