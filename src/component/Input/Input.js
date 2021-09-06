import './Input.css';

function Input({
  type,
  name,
  id,
  formClass,
  typeClass,
  borderClass,
  placeholder,
  minLength,
  maxLength,
  required,
  disabled,
  checked,
}) {
  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        className={`input ${formClass} ${typeClass}`}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        disabled={disabled}
        checked={checked}/>
    </>
  );
}

export default Input;
