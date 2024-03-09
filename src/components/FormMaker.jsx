import "../styles/FormMaker.css";

export default function FormMaker({
  labelText,
  inputType,
  placeholder,
  name,
  required,
  id,
  formTitle
}) {
  return (
      <div className='form-maker'>
        <div className='form-title'>{formTitle}</div>

        <label htmlFor={id}>{labelText}</label>
        <input
          type={inputType}
          placeholder={placeholder}
          name={name}
          required={required}
          id={id}
        />
      </div>

  );
}
