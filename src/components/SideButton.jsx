export default function SideButton({ children, onSelect, isSelected }) {
  return (
    <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
      {children}
    </button>
  );
}
