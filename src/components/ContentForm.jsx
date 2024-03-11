import FormMaker from './FormMaker'
import { FORM_DATA } from './formData'

export default function ContentForm() {
    return (
        <div className='form-label'>
          <FormMaker {...FORM_DATA[0]} />
          <FormMaker {...FORM_DATA[1]} />
          <FormMaker {...FORM_DATA[2]} />
          <FormMaker {...FORM_DATA[3]} />
          <FormMaker {...FORM_DATA[4]} />
        </div>
    )
}