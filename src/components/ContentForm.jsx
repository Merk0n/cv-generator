import FormMaker from './FormMaker';
import { FORM_DATA } from './formData';

export default function ContentForm() {
  return (
    <div className='form-label'>
      {FORM_DATA.content.map((contentItem) => (
        <FormMaker key={contentItem.formTitle} {...contentItem} />
      ))}
    </div>
  );
}
