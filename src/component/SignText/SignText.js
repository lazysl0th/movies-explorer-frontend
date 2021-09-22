import { NavLink } from 'react-router-dom';
import './SignText.css';

function SignText({ messageText, link, linkText, }) {
  return (
      <span className="sign-text">
        {messageText} <NavLink to={link} className="sign-text__link">{linkText}</NavLink>
      </span>
  );
}

export default SignText;
