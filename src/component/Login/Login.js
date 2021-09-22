import React from 'react';
import Content from '../Content/Content';
import Form from '../Form/Form';
import Field from '../Form/Field/Field';
import FormTitle from '../Form/FormTitle/FormTitle';
import FormLabel from '../Label/Label';
import FormInput from '../Input/Input';
import FormError from '../Form/FormError/FormError';
import Button from '../Button/Button';
import Submit from '../Form/Submit/Submit';
import SignText from '../SignText/SignText';
import { validatorsFunction } from '../../utils/utils';
import { errorsDescription } from '../../utils/constants'
import './Login.css';



function Login({ onAuth, error }) {

  function submitHandler(values) {
    const {email, password} = values;
    onAuth({ email, password });
  }

  return (
    <Content>
      <Form
        formName="loginForm"
        typeClass="form_type_register-login"
        onSubmit={submitHandler}
        validators={validatorsFunction}>
      <FormTitle text="Рады видеть!" typeClass="form-title_form_register-login" />
      <FormLabel
        use="email-input"
        text="E-mail"
        formClass="label_form_register-login"/>
      <Field
        type="email"
        name="email"
        required>
          {
            ({formClass, valid, ...inputProps}) => {
              return (
                <>
                  <FormInput formClass="input_form_register-login" {...inputProps}/>
                  <FormError error={Object.values(valid).every(value => value) ? '' : errorsDescription.email} typeClass="form-error_type_input"/>
                </>
              )}
          }
      </Field>
      <FormLabel
        use="password-input"
        text="Пароль"
        formClass="label_form_register-login"/>
      <Field
        type="password"
        name="password"
        placeholder=""
        validators={validatorsFunction}>
          {
            ({formClass, valid, ...inputProps}) => {
            return (
              <>
                <FormInput formClass="input_form_register-login" {...inputProps}/>
                <FormError error={(Object.values(valid).every(value => value)) ? '' : errorsDescription.password} typeClass="form-error_type_input"/>
              </>
            )}
          }
      </Field>
      <FormError typeClass="form-error_type_form" error={error}/>
      <Submit>
          {
            (isFormValid) =>
              <Button
                text="Войти"
                type="submit"
                name="buttonSubmit"
                typeButtonClass="button_submit"
                disabledClass={!isFormValid ? 'button_submit_disable' : '' }
                disabled={!isFormValid}/>
          }
      </Submit>
      </Form>
      <SignText messageText="Ещё не зарегистрированы?" link="/signup" linkText="Регистрация" />
    </Content>
  );
}

export default Login;
