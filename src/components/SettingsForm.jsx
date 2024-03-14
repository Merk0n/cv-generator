import { FORM_DATA } from './formData';
import FormMaker from './FormMaker';

export default function SettingsForm({ option }) {
  return (
    <>
      {FORM_DATA[option].map((dataItem) => (
        <FormMaker key={dataItem.labelText} {...dataItem} />
      ))}
    </>
  );
}
