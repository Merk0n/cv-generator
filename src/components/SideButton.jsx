export default function SideButton({
  children,
  textColor = '#000',
  onSelect,
  isSelected,
}) {
  return (
    <button
      className={isSelected ? 'active' : undefined}
      style={{ color: textColor }}
      onClick={onSelect}
    >
      {children}
    </button>
  );
}
