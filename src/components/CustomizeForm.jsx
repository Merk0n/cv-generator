import FormMaker from './FormMaker';
import { FORM_DATA } from './formData';

export default function CustomizeForm() {
  return (
    <div className='form-label'>
      {FORM_DATA.customize.map((customizeItem) => (
        <FormMaker key={customizeItem.formTitle} {...customizeItem} />
      ))}
    </div>
  );
}
