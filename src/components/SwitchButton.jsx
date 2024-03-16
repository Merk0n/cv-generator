import themeIcon from '../assets/theme-light-dark.svg';
import '../styles/SwitchButton.css';

export default function SwitchButton({ onSelect, isSelected }) {
  return (
    <label className='switch'>
      <img className='gIcon' src={themeIcon} alt='theme-icon' />
      <input onClick={onSelect} type='checkbox' />
      <span className='slider'></span>
    </label>
  );
}
