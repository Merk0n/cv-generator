import FormMaker from "./FormMaker.jsx";
import Header from "./Header.jsx";
import "../styles/CVForm.css";

export default function CVForm() {
  return (
    <div className='cv-form'>
      <Header />

      <div className='form-label'>
        <FormMaker
          formTitle='Personal Information'
          labelText='First Name'
          inputType='text'
          placeholder='John'
          name='first-name'
          required='required'
          id='first-name'
        />
        <FormMaker
          labelText='Last Name'
          inputType='text'
          placeholder='Doe'
          name='last-name'
          required='required'
          id='last-name'
        />
        <FormMaker
          labelText='Professional title'
          inputType='text'
          placeholder='Software Developer'
          name='professional-title'
          required='required'
          id='professional-title'
        />
        <FormMaker
          labelText='Summary'
          inputType='text'
          placeholder='A summary of your professional experience'
          name='summary'
          required='required'
          id='summary'
        />
      </div>
    </div>
  );
}
