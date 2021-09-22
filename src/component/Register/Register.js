import React from 'react';
import Content from '../Content/Content';
import Form from '../Form/Form';
import FormTitle from '../Form/FormTitle/FormTitle';
import Field from '../Form/Field/Field';
import FormLabel from '../Label/Label';
import FormInput from '../Input/Input';
import FormError from '../Form/FormError/FormError';
import Submit from '../Form/Submit/Submit';
import Button from '../Button/Button';
import SignText from '../SignText/SignText';
import { validatorsFunction } from '../../utils/utils';
import { errorsDescription } from '../../utils/constants'
import './Register.css';


function Register({ onReg, error }) {

  function submitHandler(values) {
    const {name, email, password} = values;
    onReg({ name, email, password });
  }

  return (
    <Content>
      <Form
        formName="registerForm"
        typeClass="form_type_register-login"
        onSubmit={submitHandler}
        validators={validatorsFunction}>
      <FormTitle text="Добро пожаловать!" typeClass="form-title_form_register-login" />
      <FormLabel use="name-input" text="Имя" formClass="label_form_register-login"/>
      <Field type="text" name="name"
        required>
          {
            ({formClass, valid, ...inputProps}) => {
              return (
                <>
                  <FormInput formClass="input_form_register-login" {...inputProps}/>
                  <FormError
                    error={(Object.values(valid).every(value => value)) ? '' : errorsDescription.name}
                    typeClass="form-error_type_input"/>
                </>
              )}
          }
      </Field>
      <FormLabel use="email-input" text="E-mail" formClass="label_form_register-login" />
      <Field type="email" name="email"
        required>
          {
            ({formClass, valid, ...inputProps}) => {
              return (
                <>
                  <FormInput formClass="input_form_register-login" {...inputProps}/>
                  <FormError
                    error={(Object.values(valid).every(value => value)) ? '' : errorsDescription.email}
                    typeClass="form-error_type_input"/>
                </>
              )}
          }
      </Field>
      <FormLabel use="password-input" text="Пароль" formClass="label_form_register-login" />
      <Field type="password" name="password">
          {
            ({formClass, valid, ...inputProps}) => {
              return (
                <>
                  <FormInput formClass="input_form_register-login" {...inputProps}/>
                  <FormError
                    error={(Object.values(valid).every(value => value)) ? '' : errorsDescription.password}
                    typeClass="form-error_type_input"/>
                </>
              )}
          }
      </Field>
      <FormError typeClass="form-error_type_form form-error_form_register" error={error}/>
      <Submit>
          {
            (isFormValid) =>
              <Button
                text="Зарегистрироваться"
                type="submit"
                name="buttonSubmit"
                typeButtonClass="button_submit"
                disabledClass={!isFormValid ? 'button_submit_disable' : '' }
                disabled={!isFormValid}/>
          }
      </Submit>
      </Form>
      <SignText messageText="Уже зарегистрированы?" link="/signin" linkText="Войти" />
    </Content>
  );
}

export default Register;
