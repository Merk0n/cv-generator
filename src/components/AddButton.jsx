export default function AddButton({ onSelect }) {
  return (
    <>
      <button className='custom-button add-button' onClick={onSelect}>
        ADD
      </button>
    </>
  );
}
