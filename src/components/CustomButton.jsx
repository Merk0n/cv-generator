export default function CustomButton({ children, onSelect, isSelected }) {
  return (
    <button
      className={`custom-button ${isSelected && 'active'}`}
      onClick={onSelect}
    >
      {children}
    </button>
  );
}
