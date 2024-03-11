import FormMaker from './FormMaker'
import { FORM_DATA } from './formData'

export default function CustomizeForm() {
    return (
        <div className='form-label'>
          <FormMaker {...FORM_DATA[5]} />
          <FormMaker {...FORM_DATA[6]} />
          <FormMaker {...FORM_DATA[7]} />
          <FormMaker {...FORM_DATA[8]} />
          <FormMaker {...FORM_DATA[9]} />
        </div>
    )
}