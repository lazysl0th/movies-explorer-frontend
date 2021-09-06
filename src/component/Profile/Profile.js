import { NavLink } from 'react-router-dom';
import './Profile.css';
import Form from '../Form/Form';
import FormTitle from '../Form/FormTitle/FormTitle';
import FormLabel from '../Label/Label';
import FormInput from '../Input/Input';
import FormError from '../Form/FormError/FormError';
import FormButton from '../Button/Button';

function Profile() {
  return (
    <section className="profile">
      <Form formName="editProfileForm" typeClass="form_type_editprofile">
        <FormTitle text="Привет, Ленивец!" typeClass="form-title_form_editprofile" />
        <FormLabel
          use="userName-input"
          text="Имя"
          formClass="label_form_editprofile" />
        <FormInput
          type="text"
          name="userName"
          id="userName-input"
          formClass="input_form_editprofile"
          borderClass="form-input_border_bottom"
          placeholder="Ленивый ленивец"
          minLength="2"
          maxLength="40"
          required
          disabled />
        <FormLabel
          use="userEmail-input"
          text="E-mail"
          formClass="label_form_editprofile"/>
        <FormInput
          type="email"
          name="emailName"
          id="userEmail-input"
          formClass="input_form_editprofile"
          placeholder="l.sloth@yandex.ru"
          required
          disabled />
        <FormError use="editProfileForm-error" typeClass="form-error_type_form"/>
        <FormButton
          text="Редактировать"
          type="button"
          name="buttonEdit"
          typeButtonClass="button_edit"/>
        <FormButton
          text="Сохранить"
          type="submit"
          name="buttonSubmit"
          typeButtonClass="button_submit button_submit_disable"
          hiddenClass="button_hidden"/>
      </Form>
      <NavLink to="/signout" className="profile__link">Выйти из аккаунта</NavLink>
    </section>
  );
}

export default Profile;
