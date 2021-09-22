import './Label.css';

function Label({ use, text, formClass, typeClass, marginClass, paddingClass, borderClass }) {
  return (
    <label htmlFor={use} className={`label ${formClass} ${typeClass} ${marginClass} ${paddingClass} ${borderClass}`}>
      {text}
    </label>
  );
}

export default Label;
