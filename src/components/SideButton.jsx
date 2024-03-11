export default function SideButton({ children, textColor = "#000", onSelect }) {

  return (
    <button style={{ color: textColor }} onClick={onSelect}>
      {children}
    </button>
  );
}
