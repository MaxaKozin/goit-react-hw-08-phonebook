import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './LoginMenu.module.css';

const LoginMenu = () => {
  return (
    <div className={s.container}>
      <NavLink className={s.link} activeClassName={s.link_active} to='/signup'>Signup</NavLink>
      <NavLink className={s.link} activeClassName={s.link_active} to='/login'>Login</NavLink>
    </div>
  );
}

export default LoginMenu;