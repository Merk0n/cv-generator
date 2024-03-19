import Input from './Input';
import AddButton from './AddButton';
import DeleteButton from './DeleteButton';

export default function TechStack({ state, setState }) {
  return (
    <>
      {state.map((job, index) => {
        return (
          <>
            <Input
              index={index}
              property='languages'
              label='Languages'
              type='text'
              state={state}
              setState={setState}
            />
            <Input
              index={index}
              property='frameworks'
              label='Frameworks'
              type='text'
              state={state}
              setState={setState}
            />
            <Input
              index={index}
              property='databases'
              label='Databases'
              type='text'
              state={state}
              setState={setState}
            />

            <Input
              index={index}
              property='tools'
              label='Tools'
              type='text'
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
            languages: '',
            frameworks: '',
            databases: '',
            tools: '',
          });
          setState(newState);
        }}
      ></AddButton>
    </>
  );
}
