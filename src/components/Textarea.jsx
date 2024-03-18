export default function Textarea({ property, label, index, state, setState }) {
  return (
    <label className='input-item'>
      <span className='input-item__title' htmlFor={property}>
        {label}
      </span>
      <textarea
        className='input-item__textarea'
        id={property}
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
