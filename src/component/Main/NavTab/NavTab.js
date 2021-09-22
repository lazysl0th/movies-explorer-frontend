import './NavTab.css';

function NavTab() {
  return (
    <ul className="nav-tab">
      <li><a href="#project" className="nav-tab__link">О проекте</a></li>
      <li><a href="#techs" className="nav-tab__link">Технологии</a></li>
      <li><a href="#student" className="nav-tab__link">Студент</a></li>
    </ul>
  );
}

export default NavTab;
