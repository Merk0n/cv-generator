export default function FormMaker({
  formTitle,
  textareaInput,
  labelText,
  inputType,
  placeholder,
  name,
  required,
  id,
}) {
  const InputComponent = textareaInput ? 'textarea' : 'input';
  return (
    <div className='form-maker'>
      {formTitle && <div className='form-title'>{formTitle}</div>}

      <label className='label' htmlFor={id}>
        {labelText}
      </label>
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
