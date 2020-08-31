import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getContacts } from '../../redux/phonebook/phonebook-selectors';
import * as contactsOperations from '../../redux/phonebook/phonebook-operations';

import s from './InputForm.module.css';

class InputForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    name: '',
    number: ''
  }

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { name } = this.state;
    const { contacts, onSubmit } = this.props;
    if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} Already exists`);
      this.reset();
      return;
    }
    onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' })
  }

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label} htmlFor="name">
          Name
          </label>
        <input
          id="name"
          type="text"
          onChange={this.handleChange}
          className={s.input}
          name="name"
          value={name}
          placeholder='Name'
          autoComplete="off"
          autoFocus
        />

        <label className={s.label} htmlFor="number">
          Number
          </label>
        <input
          id="number"
          type="text"
          onChange={this.handleChange}
          className={s.input}
          name="number" value={number}
          placeholder='Phone number'
          autoComplete="off"
        />
        <button type="submit" className={s.btn}>Add contact</button>
      </form>
    );
  }
}
const mapStateToProps = state => ({
  contacts: getContacts(state)
})

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ name, number }) => dispatch(contactsOperations.addContact({ name, number }))
})

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);