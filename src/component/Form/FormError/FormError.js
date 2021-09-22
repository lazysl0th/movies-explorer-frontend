import React from 'react';
import './FormError.css';

function FormError({ error, formClass, typeClass, }) {

  return (
    <span className={`form-error ${formClass} ${typeClass} ${error ? 'form-error_active' : ''}`}>
      {error}
    </span>
  );
}

export default FormError;
