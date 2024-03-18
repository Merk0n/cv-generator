import { useState } from 'react';
import chevronDownIcon from '../assets/chevron-down.png';
import chevronUpIcon from '../assets/chevron-up.png';
import '../styles/Card.css';

export default function Card({ title, children }) {
  const [showState, setShowState] = useState(false);
  const handleToggleShow = () => {
    setShowState(!showState);
  };

  return (
    <div className='card'>
      <button className='card-button' onClick={handleToggleShow}>
        <h3 className='card-title'>
          {title}
          <img
            className='custom-icon'
            src={showState ? chevronDownIcon : chevronUpIcon}
            alt='chevron'
          />
        </h3>
      </button>

      {showState && children}
    </div>
  );
}
