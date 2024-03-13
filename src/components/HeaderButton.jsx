export default function HeaderButton({ textColor, onSelect, children }) {
  return (
    <button style={{ color: textColor }} onClick={onSelect}>
      {children}
    </button>
  );
}
