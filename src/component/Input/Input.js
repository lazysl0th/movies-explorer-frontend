import React from 'react';
import './Input.css';

function Input({
  type,
  name,
  id,
  formClass,
  typeClass,
  placeholder,
  value,
  minLength,
  maxLength,
  onChange,
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
        value={value}
        minLength={minLength}
        maxLength={maxLength}
        onChange={onChange}
        required={required}
        disabled={disabled}
        checked={checked}/>
    </>
  );
}

export default Input;
