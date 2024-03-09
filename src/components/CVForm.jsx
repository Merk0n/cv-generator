import FormMaker from "./FormMaker.jsx";
import Header from "./Header.jsx";
import "../styles/CVForm.css";

export default function CVForm() {
  return (
    <div className='cv-form'>
      <Header />

      <FormMaker
        labelText='Last Name'
        inputType='text'
        placeholder='Doe'
        name='last-name'
        required='required'
        id='last-name'
      />
      <FormMaker
        labelText='First Name'
        inputType='text'
        placeholder='John'
        name='first-name'
        required='required'
        id='first-name'
      />
    </div>
  );
}
