import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/phonebook/phonebook-actions';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';

const Filter = ({ filter, onChange }) => (
  <div className={styles.wrapper}>
    <label className={styles.label}>
      Find by Name
    <input className={styles.input} type="text" value={filter} onChange={onChange} />
    </label>
  </div>
);
Filter.defaultProps = {
  filter: ''
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  filter: getFilter(state)
})

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(actions.changeFilter(event.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);