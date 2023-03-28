import React from 'react';
import { FormContext } from '../../../context/FormContext'
import './Submit.css';

function Submit({ children }) {
  const { isFormValid, isFormDisable } = React.useContext(FormContext);

  return (
    <>
      {
        children(isFormValid, isFormDisable)
      }
    </>
  );
}

export default Submit;
