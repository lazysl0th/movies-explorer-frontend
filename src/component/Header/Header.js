import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import './Header.css';
import headerLogo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header() {
  const history = useHistory();
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <header className={`header ${
      (history.location.pathname === '/signup' || history.location.pathname ==='/signin') && 'header_type_login-register'}`}>
        <NavLink to="/" className="header__logo"><img src={headerLogo} alt="Логотип" /></NavLink>
        <nav className={`header__nav ${(currentUser?.loggedIn || (history.location.pathname === '/signup' || history.location.pathname ==='/signin')) && 'header__nav_hidden'}`}>
            <NavLink to="/signup" className="header__link">Регистрация</NavLink>
            <NavLink to="/signin" className="header__link header__link_background-color_green">Войти</NavLink>
        </nav>
        <Navigation />
    </header>
  );
}

export default Header;
