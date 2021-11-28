import { Component } from 'react';

import { generate } from 'shortid';

import classes from './Form.module.css';

class Form extends Component {
  state = { name: '', number: '' };

  nameInputId = generate();
  numberInputId = generate();

  handleChange = ({ currentTarget: { name, value } }) => {
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = (event) => {
    const {
      props,
      state: { name, number },
      reset,
    } = this;
    event.preventDefault();
    props.onSubmit(name, number);
    reset();
  };

  render() {
    const { name, number } = this.state;
    
    return (
      <form onSubmit={this.handleSubmit} className={classes.form}>
        <label htmlFor={this.nameInputId}>Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.handleChange}
          id={this.nameInputId}
        />
        <label htmlFor={this.numberInputId}>Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={this.handleChange}
          id={this.numberInputId}
        />
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

export default Form;
