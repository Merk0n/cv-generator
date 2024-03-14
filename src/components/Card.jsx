import { useState } from 'react';

export default function Card({ title, children }) {
  const [showState, setShowState] = useState(true);
  const handleToggleShow = () => {
    setShowState(!showState);
  };

  return (
    <div className='card'>
      <h3 className='card-title'>{title}</h3>
      <button onClick={handleToggleShow}>Show/Hide</button>

      {showState && children}
    </div>
  );
}
