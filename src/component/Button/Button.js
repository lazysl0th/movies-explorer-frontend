import './Button.css';

function Button({ text, type, name, typeButtonClass, marginClass, hiddenClass }) {
  return (
    <button type={type} name={name} className={`button ${typeButtonClass} ${marginClass} ${hiddenClass}`}>{text}</button>
  );
}

export default Button;
