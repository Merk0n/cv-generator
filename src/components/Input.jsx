export default function Input({
  index,
  property,
  label,
  type,
  state,
  setState,
  onClickDeletePhoto,
}) {
  const changePhoto = (e) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setState((prev) => {
        return [{ ...prev[0], photo: e.target.result }, ...prev.slice(1)];
      });
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const changeRest = (e) => {
    const newValue = state.map((item, stateIndex) =>
      stateIndex === index ? { ...item, [property]: e.target.value } : item
    );
    setState(newValue);
  };

  return (
    <label className='input-item'>
      <span className='input-item__title' htmlFor={property}>
        {label}
      </span>
      {type === 'file' ? (
        <div className='photo-label'>
          <label className='clickable-label' htmlFor='photo'>
            {state[index].photo ? 'Photo added successfully!' : 'Select file'}
            <input
              className='input-item__input input-file'
              id={property}
              type={type}
              onChange={changePhoto}
            />
          </label>

          <button
            onClick={onClickDeletePhoto}
            className='custom-button photo-delete-button'
          >
            Delete
          </button>
        </div>
      ) : (
        <input
          className='input-item__input'
          id={property}
          type={type}
          value={state[index][property]}
          onChange={changeRest}
        />
      )}
    </label>
  );
}
