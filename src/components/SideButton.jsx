export default function SideButton({ children , textColor = "#000"}) {
  function handleClick() {
    console.log("Button clicked");
  }

  return <button style={{color: textColor}} onClick={handleClick}>{children}</button>;
}
