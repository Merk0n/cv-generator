export default function Input({
  index,
  property,
  label,
  type,
  state,
  setState,
}) {
  return (
    <label className='input-item'>
      <span className='input-item__title' htmlFor={property}>
        {label}
      </span>
      <input
        className='input-item__input'
        id={property}
        type={type}
        value={state[index][property]}
        onChange={(e) => {
          const newValue = state.map((item, stateIndex) =>
            stateIndex === index
              ? { ...item, [property]: e.target.value }
              : item
          );
          setState(newValue);
        }}
      />
    </label>
  );
}
