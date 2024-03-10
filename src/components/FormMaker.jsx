import "../styles/FormMaker.css";

export default function FormMaker({
  basicInput,
  labelText,
  inputType,
  placeholder,
  name,
  required,
  id,
  formTitle,
}) {
  const InputComponent = basicInput ? 'textarea' : 'input';
  return (
      <div className='form-maker'>
        <div className='form-title'>{formTitle}</div>

        <label className="label" htmlFor={id}>{labelText}</label>
        <InputComponent
          type={inputType}
          placeholder={placeholder}
          name={name}
          required={required}
          id={id}
        />
      </div>

  );
}
