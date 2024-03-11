export default function Tabs({ buttons, ButtonsContainer, ...props }) {

  return <ButtonsContainer {...props}>{buttons}</ButtonsContainer>;
}
