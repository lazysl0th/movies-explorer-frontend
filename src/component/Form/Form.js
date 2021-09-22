import './Form.css';

function Form({ formName, typeClass, children }) {
  return (
    <form name={formName} className={`form ${typeClass}`}>
      {children}
    </form>
  );
}

export default Form;
