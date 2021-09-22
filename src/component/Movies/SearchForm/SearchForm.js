import './SearchForm.css';
import Form from '../../Form/Form';
import Field from '../../Form/Field/Field';
import FormInput from '../../Input/Input';
import FormError from '../../Form/FormError/FormError';
import Submit from '../../Form/Submit/Submit';
import Button from '../../Button/Button'
import FormLabel from '../../Label/Label';
import { validatorsFunction } from '../../../utils/utils';

function SearchForm({ onSearch, error }) {

  function submitHandler(values) {
    const { searchQuery, shorts } = values;
    onSearch({ searchQuery, shorts });
  }

  return (
    <Form formName="searchForm" typeClass="form_type_search" onSubmit={submitHandler} validators={validatorsFunction}>
      <fieldset className="fieldset">
      <Field
        type="text"
        name="searchQuery"
        placeholder="Фильм"
        required
        checked
        >
          {
            ({formClass, ...inputProps}) => {
              return (
                <>
                  <FormInput formClass="input_form_search" {...inputProps}/>
                </>
              )}
          }
      </Field>
      <Submit>
          {
            () =>
              <Button
                text="Поиск"
                type="submit"
                name="buttonSubmit"
                formClass="button_submit_form_search"
                typeButtonClass="button_submit"/>
          }
      </Submit>
      </fieldset>
      <FormError formClass="form-error_form_search" typeClass="form-error_type_input" error={error}/>
      <Field
        type="checkbox"
        id="search-checkbox"
        name="shorts">
          {
            ({formClass, ...inputProps}) => {
              return (
                <>
                  <FormInput formClass="input_type_chechbox" {...inputProps}/>
                </>
              )
            }
          }
      </Field>
      <FormLabel use="search-checkbox" text="Короткометражки" formClass="label_form_search" typeClass="label_type_switch"/>
    </Form>
  );
}

export default SearchForm;
