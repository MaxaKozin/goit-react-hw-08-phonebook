import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={s.container}>
      <NavLink className={s.link} activeClassName={s.link_active} exact to="/">
        Home
      </NavLink>
      <NavLink
        className={s.link}
        activeClassName={s.link_active}
        to="/phonebook"
      >
        Phonebook
      </NavLink>
    </div>
  );
};

export default Navigation;
