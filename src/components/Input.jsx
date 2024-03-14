export default function Input({
  property,
  label,
  type,
  index,
  state,
  setState,
}) {
  return (
    <div className='input-item'>
      <label className='label' htmlFor={property}>
        {label}
      </label>
      <input
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
    </div>
  );
}
