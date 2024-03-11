import FormMaker from './FormMaker';
import { FORM_DATA } from './formData';

export default function SettingsForm({ formType }) {
  return (
    <div className='form-label'>
      {FORM_DATA[formType].map((contentItem) => (
        <FormMaker key={contentItem.formTitle} {...contentItem} />
      ))}
    </div>
  );
}
