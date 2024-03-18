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
        className='custom-button delete-button'
        onClick={() => {
          handleDelete(index);
        }}
      >
        <img
          className='custom-icon'
          style={{ height: '25px', width: '25px' }}
          src={trashIcon}
          alt='trash-icon'
        />
        DELETE
      </button>
    </>
  );
}
