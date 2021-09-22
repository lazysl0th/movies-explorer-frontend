import React from 'react';
import { FormContext } from '../../context/FormContext';
import './Form.css';

function Form({ formName, typeClass, onSubmit, children, validators }) {
  const [formValues, setFormValues] = React.useState({});
  const [formFieldsValid, setFormFieldsValid] = React.useState({});
  const [isFormValid, setIsFormValid] = React.useState(false);
  const [isFormDisable, setIsFormDisable] = React.useState(true);

  const onChangeInputs = React.useCallback ((name, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }, []);

  React.useEffect(() => {
    const formKeys = Object.keys(formValues);

    const allFieldsValidation = formKeys.map((key) => {
      const valueByKey = formValues[key];

      if (!validators[key]) {
        return {};
      }
      const errors = Object.entries(validators[key]).map(([errorKey, validatorFn]) => {
        return { [errorKey]: validatorFn(valueByKey) };
      }).reduce((acc, item) => ({ ...acc, ...item}), {});

      return { [key]: errors };

    }).reduce((acc, item) => ({...acc, ...item}), {});

    setFormFieldsValid(allFieldsValidation);
  }, [formValues, validators]);

  React.useEffect(() => {
    for (const fieldKey in formFieldsValid) {
      const keyError = formFieldsValid[fieldKey];
      for (const errorKey in keyError) {
        if (keyError[errorKey] === false) {
          return setIsFormValid(false);
        }
      }
    }
    setIsFormValid(true);
  }, [formFieldsValid, setIsFormValid]);

  function submitHandler(e) {
    e.preventDefault();
    const result = onSubmit(formValues);
    if (result) {
      return
    }
    setIsFormDisable(true);
    setIsFormValid(false);
  }

  function enableHandler() {
    setIsFormDisable(false);
  }

  const formContextValue = { onChangeInputs, enableHandler, isFormValid, isFormDisable, formFieldsValid };

  return (
    <form name={formName} className={`form ${typeClass}`} onSubmit={submitHandler} noValidate>
      <FormContext.Provider value={ formContextValue }>
        {children}
      </FormContext.Provider>
    </form>
  );
}

export default Form;


