import FormMaker from "./FormMaker.jsx";
import Header from "./Header.jsx";
import "../styles/CVForm.css";
import { FORM_DATA } from "./formData.js";

export default function CVForm() {
  return (
    <div className='cv-form'>
      <Header />
      <div className='form-label'>
        <FormMaker {...FORM_DATA[0]} />
        <FormMaker {...FORM_DATA[1]} />
        <FormMaker {...FORM_DATA[2]} />
        <FormMaker {...FORM_DATA[3]} />
        <FormMaker {...FORM_DATA[4]} />
      </div>
    </div>
  );
}
