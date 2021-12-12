import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { generate } from 'shortid';
import classes from './Form.module.css';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const nameInputId = generate();
  const numberInputId = generate();

  const handleChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);

        break;

      case 'number':
        setNumber(value);

        break;

      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const findConcurrence = (enteredName, enteredNumber) =>
    contacts.find(
      ({ name, number }) => name === enteredName || number === enteredNumber
    );

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      return alert('The fields are mandatory.');
    }

    const concurrence = findConcurrence(name, number);
    if (concurrence) {
      return alert(concurrence.name + ' is already in contacts.');
    }

    const addAction = contactsOperations.addContact(name, number);
    dispatch(addAction);
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label htmlFor={nameInputId}>Name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
        id={nameInputId}
      />
      <label htmlFor={numberInputId}>Number</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChange}
        id={numberInputId}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default Form;
