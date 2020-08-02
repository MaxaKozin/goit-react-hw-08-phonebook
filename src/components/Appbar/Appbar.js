import React from 'react';
import Navigation from '../Navigation/Navigation';
import LoginMenu from '../LoginMenu/LoginMenu';
import authSelectors from '../../redux/auth/auth-selectors';
import s from './Appbar.module.css';
import UserMenu from '../UserMenu/UserMenu';
import { connect } from 'react-redux';

const Appbar = ({ isAuthenticated }) => {
  return (
    <div className={s.appbar}>
      <Navigation />
      {!isAuthenticated ? <LoginMenu /> : <UserMenu />}

    </div>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state)
})

export default connect(mapStateToProps)(Appbar);