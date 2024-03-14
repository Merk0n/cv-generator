import DeleteButton from './DeleteButton';
import Input from './Input';
import Textarea from './Textarea';
import AddButton from './AddButton';

export default function Experience({ state, setState }) {
  return (
    <>
      {state.map((job, index) => {
        return (
          <div key={index} className='input-item'>
            <Input
              index={index}
              property='job'
              label='Job'
              type='text'
              state={state}
              setState={setState}
            />
            <Input
              index={index}
              property='employer'
              label='Employer'
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
          </div>
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
