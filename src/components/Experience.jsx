import DeleteButton from './DeleteButton';
import Input from './Input';
import Textarea from './Textarea';
import AddButton from './AddButton';

export default function Experience({ state, setState }) {
  return (
    <>
      {state.map((job, index) => {
        return (
          <>
            <Input
              index={index}
              property='companyName'
              label='Company Name'
              type='text'
              state={state}
              setState={setState}
            />
            <Input
              index={index}
              property='positionTitle'
              label='Position Title'
              placeholder='Enter position title'
              type='text'
              state={state}
              setState={setState}
            />
            <Input
              index={index}
              property='location'
              label='Location'
              type='text'
              state={state}
              setState={setState}
            />

            <Input
              index={index}
              property='startDate'
              label='Start'
              type='date'
              state={state}
              setState={setState}
            />
            <Input
              index={index}
              property='endDate'
              label='End'
              type='date'
              state={state}
              setState={setState}
            />

            <Textarea
              index={index}
              property='description'
              label='Description'
              state={state}
              setState={setState}
            />
            <DeleteButton index={index} state={state} setState={setState} />
            <hr className='dark-hr' />
          </>
        );
      })}
      <AddButton
        className='add-button'
        onSelect={() => {
          const newState = [...state];
          newState.push({
            job: '',
            employer: '',
            startDate: '',
            endDate: '',
            description: '',
          });
          setState(newState);
        }}
      ></AddButton>
    </>
  );
}
