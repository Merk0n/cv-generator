import themeIcon from '../assets/theme-light-dark.svg';
import '../styles/SwitchButton.css';

export default function SwitchButton() {
  return (
    <label className='switch'>
      <img className='gIcon' src={themeIcon} alt='theme-icon' />
      <input type='checkbox' />
      <span className='slider'></span>
    </label>
  );
}
