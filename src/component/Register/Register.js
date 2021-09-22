import './Register.css';
import Content from '../Content/Content';
import Form from '../Form/Form';
import FormTitle from '../Form/FormTitle/FormTitle';
import FormLabel from '../Label/Label';
import FormInput from '../Input/Input';
import FormError from '../Form/FormError/FormError';
import FormButton from '../Button/Button';
import SignText from '../SignText/SignText';


function Register() {
  return (
    <Content>
      <Form formName="registerForm" typeClass="form_type_register-login">
      <FormTitle text="Добро пожаловать!" typeClass="form-title_form_register-login" />
      <FormLabel use="userName-input" text="Имя" formClass="label_form_register-login"/>
      <FormInput
        type="text"
        name="userName"
        formClass="input_form_register-login"
        id="userName-input"
        placeholder=""
        minLength="2"
        maxLength="40"
        required />
      <FormError use="userName-input-error" typeClass="form-error_type_input"/>
      <FormLabel use="userEmail-input" text="E-mail" formClass="label_form_register-login" />
      <FormInput
        type="email"
        name="emailName"
        id="userEmail-input"
        formClass="input_form_register-login"
        borderRadiusClass="form-input_border-radius_8"
        placeholder=""
        required />
      <FormError use="userEmail-input-error" typeClass="form-error_type_input"/>
      <FormLabel use="userPassword-input" text="Пароль" formClass="label_form_register-login" />
      <FormInput
        type="password"
        name="userPassword"
        id="userPassword-input"
        formClass="input_form_register-login"
        placeholder=""
        required />
      <FormError use="userPassword-input-error" typeClass="form-error_type_input"/>
      <FormButton
        text="Зарегистрироваться"
        type="submit"
        name="buttonSubmit"
        typeButtonClass="button_submit"
        marginClass="button_margin-top_s"/>
      </Form>
      <SignText messageText="Уже зарегистрированы?" link="/signin" linkText="Войти" />
    </Content>
  );
}

export default Register;
