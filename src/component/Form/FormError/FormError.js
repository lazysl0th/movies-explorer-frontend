import './FormError.css';

function FormError({ use, typeClass }) {
  return (
    <span className={`form-error ${use} ${typeClass} form-error_active`}></span>
  );
}

export default FormError;
