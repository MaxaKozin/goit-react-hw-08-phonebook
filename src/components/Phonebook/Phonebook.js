import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as contactsOperations from '../../redux/phonebook/phonebook-operations';
import { getVisibleContacts } from '../../redux/phonebook/phonebook-selectors';

import s from './Phonebook.module.css';

const Phonebook = ({ contacts, onDelete }) => {
  return (
    <>
      {contacts && (<ul className={s.list}>
        {contacts.map(({ name, number, id }) => (
          name && (<li className={s.item} key={id}>
            <span>{name} : {number}</span>
            <button type="button" className={s.close} onClick={() => onDelete(id)}>+</button>
          </li>)
        ))}
      </ul>)}
    </>

  )
}

Phonebook.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return ({
    contacts: getVisibleContacts(state),
  })
};

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(contactsOperations.deleteContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
