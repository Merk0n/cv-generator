import '../styles/Header.css';
import SwitchButton from './SwitchButton';
import SideButton from './SideButton';
import { useState } from 'react';
import CreateBy from './CreateBy';

export default function Header() {
  const [personalInfo, setPersonalInfo] = useState('xd');

  function handleSelect(selectedButton) {
    //selectedButton => "Clear" , "Load example"
    setPersonalInfo(selectedButton);
    console.log(selectedButton);
  }

  return (
    <>
      <div className='header-box'>
        <h1>cv generator</h1>

        <SwitchButton />

        <div className='header-btn'>
          <SideButton
            textColor={'#ff0000'}
            onSelect={() => handleSelect('clear')}
          >
            Clear
          </SideButton>
          <SideButton onSelect={() => handleSelect('load')}>
            Load example
          </SideButton>
        </div>
        <CreateBy />
        {personalInfo}
      </div>
    </>
  );
}
