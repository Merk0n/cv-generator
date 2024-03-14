import { useState } from 'react';
import arrowIcon from '../assets/arrow-down-circle.svg';

export default function Card({ title, children }) {
  const [showState, setShowState] = useState(true);
  const handleToggleShow = () => {
    setShowState(!showState);
  };

  return (
    <div className='card'>
      <h3 className='card-title'>
        {title}
        <button className='card-button' onClick={handleToggleShow}>
          <img src={arrowIcon} alt='arrow-down-circle' />
          Show/Hide
        </button>
      </h3>

      {showState && children}
    </div>
  );
}
