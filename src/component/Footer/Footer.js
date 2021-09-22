import { useHistory } from 'react-router';
import './Footer.css';

function Footer() {
  const history = useHistory();
  return (
    <footer className={`footer ${history.location.pathname === '/profile' && 'footer_hidden'}`}>
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <p className="footer__copyright">&copy; 2021</p>
      <ul className="footer__links">
        <li><a href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer" className="footer__link">Яндекс.Практикум</a></li>
        <li><a href="https://github.com/" target="_blank" rel="noreferrer" className="footer__link">Github</a></li>
        <li><a href="https://telegram.org/" target="_blank" rel="noreferrer" className="footer__link">Telegram</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
