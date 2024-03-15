import Input from './Input';
import Textarea from './Textarea';

export default function Personal({ state, setState }) {
  return (
    <>
      <Input
        index={0}
        property='name'
        label='Name'
        type='text'
        state={state}
        setState={setState}
      />
      <Input
        index={0}
        property='email'
        label='Email'
        type='email'
        state={state}
        setState={setState}
      />
      <Input
        index={0}
        property='phoneNumber'
        label='Phone Number'
        type='tel'
        state={state}
        setState={setState}
      />
      <Textarea
        index={0}
        property='address'
        label='Address'
        state={state}
        setState={setState}
      />
      <Textarea
        index={0}
        property='bio'
        label='Bio'
        state={state}
        setState={setState}
      />
      <hr />
    </>
  );
}
