import FormMaker from './FormMaker'
import { FORM_DATA } from './formData'

export default function CustomizeForm() {
    return (
        <div className='form-label'>
          <FormMaker {...FORM_DATA.customize[0]} />
          <FormMaker {...FORM_DATA.customize[1]} />
          <FormMaker {...FORM_DATA.customize[2]} />
          <FormMaker {...FORM_DATA.customize[3]} />
          <FormMaker {...FORM_DATA.customize[4]} />
        </div>
    )
}