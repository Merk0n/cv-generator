import { useState } from 'react';
import chevronDown from '../assets/chevron-down.png';
import chevronUp from '../assets/chevron-up.png';

export default function Card({ title, children }) {
  const [showState, setShowState] = useState(true);
  const handleToggleShow = () => {
    setShowState(!showState);
  };

  return (
    <div className='card'>
      <button className='card-button' onClick={handleToggleShow}>
        <h3 className='card-title'>
          {title}
          <img src={showState ? chevronDown : chevronUp} alt='chevron' />
        </h3>
      </button>

      {showState && children}
    </div>
  );
}
