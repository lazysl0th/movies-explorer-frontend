import React from 'react';
import { NavLink } from 'react-router-dom';
import Form from '../Form/Form';
import FormTitle from '../Form/FormTitle/FormTitle';
import Field from '../Form/Field/Field';
import FormLabel from '../Label/Label';
import FormInput from '../Input/Input';
import FormError from '../Form/FormError/FormError';
import FormButton from '../Form/FormButton/FormButton';
import Submit from '../Form/Submit/Submit';
import Button from '../Button/Button';
import { validatorsFunction }  from '../../utils/utils';
import './Profile.css';

function Profile({ onEdit, onLog, error }) {

  function submitHadler(values) {
    const { name, email } = values;
    onEdit({ name, email });
    if (error) {
      return error;
    }
  }

  return (
    <section className="profile">
      <Form
        formName="editProfileForm"
        typeClass="form_type_editprofile"
        onSubmit={submitHadler}
        validators={validatorsFunction}>
        <FormTitle text="Привет, Ленивец!" typeClass="form-title_form_editprofile" />
        <FormLabel
          use="userName-input"
          text="Имя"
          formClass="label_form_editprofile" />
        <Field
          type="text"
          name="name"
          id="name-input">
            {
              ({formClass, borderClass, error, isFormDisable, ...inputProps}) => {
                return (
                  <>
                    <FormInput
                      formClass="input_form_editprofile"
                      borderClass="form-input_border_bottom"
                      disabled={isFormDisable}
                      {...inputProps}/>
                  </>
                )}
            }
        </Field>
        <FormLabel
          use="userEmail-input"
          text="E-mail"
          formClass="label_form_editprofile"/>
        <Field
          type="email"
          name="email"
          id="email-input"
          required>
            {
              ({formClass, borderClass, error, isFormDisable, ...inputProps}) => {
                return (
                  <>
                    <FormInput
                      formClass="input_form_editprofile"
                      borderClass="form-input_border_bottom"
                      disabled={isFormDisable}
                      {...inputProps}/>
                  </>
                )}
            }
        </Field>
        <FormError typeClass="form-error_type_form" error={error}/>
        <FormButton>
          {
            (isFormDisable, enableHandler) => {
              return (
                <>
                  <Button
                    text="Редактировать"
                    type="button"
                    name="buttonEdit"
                    typeButtonClass="button_edit"
                    hiddenClass={isFormDisable ? '' : 'button_hidden'}
                    handler={enableHandler}/>
                  <NavLink to="/signout" className={`profile__link ${isFormDisable ? '' : 'profile__link_hidden'}`} onClick={onLog}>Выйти из аккаунта</NavLink>
                </>
              )
            }
          }
        </FormButton>
        <Submit>
          {
            (isFormValid, isFormDisable) =>
              <Button
                text="Сохранить"
                type="submit"
                name="buttonSubmit"
                typeButtonClass="button_submit"
                hiddenClass={isFormDisable ? 'button_hidden' : ''}
                disabledClass={!isFormValid ? 'button_submit_disable' : '' }
                disabled={!isFormValid}/>
          }
        </Submit>
      </Form>
    </section>
  );
}

export default Profile;
