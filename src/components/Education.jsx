import AddButton from './AddButton';
import DeleteButton from './DeleteButton';
import Input from './Input';

export default function Education({ state, setState }) {
  return (
    <>
      {state.map((item, index) => {
        return (
          <div key={index} className='input-item'>
            <Input
              index={index}
              property='school'
              label='School'
              type='text'
              state={state}
              setState={setState}
            />
            <Input
              index={index}
              property='degree'
              label='Degree'
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

            <DeleteButton index={index} state={state} setState={setState} />
          </div>
        );
      })}
      <AddButton
        onSelect={() => {
          const newState = [...state];
          newState.push({
            school: '',
            degree: '',
            startDate: '',
            endDate: '',
          });
          setState(newState);
        }}
      ></AddButton>
    </>
  );
}
