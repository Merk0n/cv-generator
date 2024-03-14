import trashIcon from '../assets/trash.svg';

export default function DeleteButton({ index, state, setState }) {
  const handleDelete = (index) => {
    const newState = [...state];
    newState.splice(index, 1);
    setState(newState);
  };

  return (
    <>
      <button
        className='delete-button'
        onClick={() => {
          handleDelete(index);
        }}
      >
        <img src={trashIcon} alt='trash-icon' />
        DELETE
      </button>
    </>
  );
}
