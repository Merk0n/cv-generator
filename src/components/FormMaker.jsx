import '../styles/FormMaker.css';

export default function FormMaker ({ labelText, inputType, placeholder, name, required, id}) {
    return (
        <form className="form-maker">
            <label htmlFor={id}>{labelText}</label>
            <input
                type={inputType}
                placeholder={placeholder}
                name={name}
                required={required}
                id={id}
            />
        </form>
    )
}