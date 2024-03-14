export default function Textarea({ property, label, index, state, setState }) {
  return (
    <div className='input-item'>
      <label className='label' htmlFor={property}>
        {label}
      </label>
      <textarea
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
    </div>
  );
}
