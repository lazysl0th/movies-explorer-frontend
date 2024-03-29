import React from 'react';
import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import './Navigation.css';
import Input from '../Input/Input';
import Label from '../Label/Label';
import avatar from '../../images/avatar.svg';

function Navigation() {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <>
      <Input type="checkbox" name="burger-menu" id="burger-menu" typeClass="input_type_chechbox" />
      <nav className={`navigation ${currentUser?.loggedIn ? '' : 'navigation_hidden' }`}>
        <Label use="burger-menu" typeClass="label_type_burger-menu" />
        <ul className="navigation__menu">
          <li className="navigation__menu-item"><NavLink exact to="/" className="navigation__link navigation__link_hidden" activeClassName="">Главная</NavLink></li>
          <li className="navigation__menu-item"><NavLink to="/movies" className="navigation__link" activeClassName="navigation__link_active">Фильмы</NavLink></li>
          <li className="navigation__menu-item">
            <NavLink to="/saved-movies" className="navigation__link" activeClassName="navigation__link_active">
              Сохраненные фильмы
            </NavLink>
          </li>
          <li className="navigation__menu-item">
            <NavLink to="/profile"
              className="navigation__link navigation__link_box-shadow_light-gray" activeClassName="navigation__link_active">
                Аккаунт
              <img className="navigation__avatar" src={avatar} alt="avatar" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
