import './Button.css';

function Button({ text, type, name, formClass, typeButtonClass, marginClass, hiddenClass, disabledClass, handler, disabled }) {
  return (
    <button
      type={type}
      name={name}
      className={`button ${formClass} ${typeButtonClass} ${marginClass} ${hiddenClass} ${disabledClass}`}
      onClick={handler}
      disabled={disabled}>
        {
          text
        }
    </button>
  );
}

export default Button;
