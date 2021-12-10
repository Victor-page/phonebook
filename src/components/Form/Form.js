import { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-actions';
import { generate } from 'shortid';
import PropTypes from 'prop-types';

import classes from './Form.module.css';

const Form = ({ onSubmit, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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
      alert('The fields are mandatory.');
      return;
    }

    const concurrence = findConcurrence(name, number);
    if (concurrence) {
      alert(concurrence.name + ' is already in contacts.');
      return;
    }

    onSubmit(name, number);
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

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ contacts: state.contacts.items });

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, value) => dispatch(addContact(name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
