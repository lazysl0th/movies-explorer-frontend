import './Login.css';
import Content from '../Content/Content';
import Form from '../Form/Form';
import FormTitle from '../Form/FormTitle/FormTitle';
import FormLabel from '../Label/Label';
import FormInput from '../Input/Input';
import FormButton from '../Button/Button';
import SignText from '../SignText/SignText';

function Login() {
  return (
    <Content>
      <Form formName="loginForm" typeClass="form_type_register-login">
      <FormTitle text="Рады видеть!" typeClass="form-title_form_register-login" />
      <FormLabel
        use="userEmail-input"
        text="E-mail"
        formClass="label_form_register-login"/>
      <FormInput
        type="email"
        name="emailName"
        id="userEmail-input"
        formClass="input_form_register-login"
        placeholder=""
        required />
      <FormLabel
        use="userPassword-input"
        text="Пароль"
        formClass="label_form_register-login"
        marginClass="label_margin_top"/>
      <FormInput
        type="password"
        name="userPassword"
        id="userPassword-input"
        formClass="input_form_register-login"
        placeholder=""
        required />
      <FormButton
        text="Войти"
        type="submit"
        name="buttonSubmit"
        typeButtonClass="button_submit"
        marginClass="button_margin-top_m"/>
      </Form>
      <SignText messageText="Ещё не зарегистрированы?" link="/signup" linkText="Регистрация" />
    </Content>
  );
}

export default Login;
