import React from 'react';
import { FormContext } from '../../../context/FormContext'
import './FormButton.css';

function FormButton({ children }) {
  const { isFormDisable, enableHandler } = React.useContext(FormContext);

  return (
    <>
      {
        children(isFormDisable, enableHandler)
      }
    </>
  );
}

export default FormButton;
