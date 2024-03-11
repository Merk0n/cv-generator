import FormMaker from './FormMaker'
import { FORM_DATA } from './formData'

export default function ContentForm() {
    return (
        <div className='form-label'>
          <FormMaker {...FORM_DATA.content[0]} />
          <FormMaker {...FORM_DATA.content[1]} />
          <FormMaker {...FORM_DATA.content[2]} />
          <FormMaker {...FORM_DATA.content[3]} />
          <FormMaker {...FORM_DATA.content[4]} />
        </div>
    )
}