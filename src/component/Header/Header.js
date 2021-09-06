import { NavLink } from 'react-router-dom';
import './Header.css';
import headerLogo from '../../images/logo.svg';

function Header({ typeClass, navHiddenClass, children }) {
  return (
    <header className={`header ${typeClass}`}>
      <NavLink to="/" className="header__logo"><img src={headerLogo} alt="Логотип" /></NavLink>
      <nav className={`header__nav ${navHiddenClass}`}>
        <NavLink to="/signup" className="header__link">Регистрация</NavLink>
        <NavLink to="/signin" className="header__link header__link_background-color_green">Войти</NavLink>
      </nav>
      {children}
    </header>
  );
}

export default Header;
