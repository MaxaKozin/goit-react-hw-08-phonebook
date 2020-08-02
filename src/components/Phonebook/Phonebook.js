import React from 'react';
import styles from './Phonebook.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as contactsOperations from '../../redux/phonebook/phonebook-operations';
import { getVisibleContacts } from '../../redux/phonebook/phonebook-selectors';

const Phonebook = ({ contacts, onDelete }) => {
  return (
    <>
      {contacts && (<ul className={styles.list}>
        {contacts.map(({ name, number, id }) => (
          name && (<li className={styles.item} key={id}>
            <span>{name} : {number}</span>
            <button type="button" className={styles.close} onClick={() => onDelete(id)}>+</button>
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
