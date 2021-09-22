import './FormTitle.css';

function FormTitle({ text, typeClass, paddingClass, alignClass }) {
  return (
    <h2 className={`form-title ${typeClass} ${paddingClass} ${alignClass}`}>{text}</h2>
  );
}

export default FormTitle;
