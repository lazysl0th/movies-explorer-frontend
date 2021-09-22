import './SearchForm.css';
import Form from '../../Form/Form';
import FormInput from '../../Input/Input';
import FormButton from '../../Button/Button'
import FormLabel from '../../Label/Label';

function SearchForm() {
  return (
    <>
    <Form formName="searchForm" typeClass="form_type_search">
      <fieldset className="fieldset">
        <FormInput
          type="text"
          name="search"
          id="search-input"
          placeholder="Фильм"
          formClass="input_form_search"
          required />
        <FormButton
          text="Поиск"
          type="submit"
          name="buttonSubmit"
          typeButtonClass="button_submit" />
      </fieldset>
      <FormInput
        type="checkbox"
        name="shorts"
        id="search-checkbox"
        typeClass="input_type_chechbox" />
      <FormLabel use="search-checkbox" text="Короткометражки" formClass="label_form_search" typeClass="label_type_switch"/>
    </Form>
    </>
  );
}

export default SearchForm;
