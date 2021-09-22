import React from 'react';
import { CurrentUserContext } from '../../../context/CurrentUserContext';
import { FormContext } from '../../../context/FormContext';
import './Field.css';

function Field({ children, type, name, id, placeholder, checked }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [value, setValue] = React.useState(type === 'checkbox' ? false : '');

  const { onChangeInputs, isFormDisable, formFieldsValid } = React.useContext(FormContext);

  React.useEffect(() => {
    setValue(
      (type !== 'checkbox') ? (!!(currentUser?.[name]) ? currentUser?.[name] : '') : false)
  }, [type, name, currentUser, setValue]);

  React.useEffect(() => {
    onChangeInputs(name, value);
  }, [value, name, id, onChangeInputs])

  function handleChange(e) {
    e.target.type === 'checkbox'
      ? setValue(e.target.checked)
      : setValue(e.target.value);
  }

  return (
    <>
      {
        children({
          type,
          name,
          id,
          placeholder,
          valid: value.length > 0 && formFieldsValid[name],
          onChange: handleChange,
          value,
          isFormDisable,
          checked
        })
      }
    </>
  );
}

export default Field;
