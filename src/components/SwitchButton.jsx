import themeIcon from '../assets/theme-light-dark.svg';

export default function SwitchButton() {
  return (
    <label className='switch'>
      <img className='gIcon' src={themeIcon} alt='theme-icon' />
      <input type='checkbox' />
      <span className='slider'></span>
    </label>
  );
}
