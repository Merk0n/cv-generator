import Header from './Header.jsx';
import '../styles/CVForm.css';
import SideButton from './SideButton.jsx';
import { useState } from 'react';
import ContentForm from './ContentForm.jsx';
import CustomizeForm from './CustomizeForm.jsx';

export default function CVForm() {
  const [selectedSetting, setSelectedSetting] = useState('content');

  function handleSelect(selectedButton) {
    setSelectedSetting(selectedButton);
  }

  return (
    <div className='cv-form'>
      <nav className='sidebar'>
        <SideButton
          isSelected={selectedSetting === 'content'}
          onSelect={() => handleSelect('content')}
        >
          Content
        </SideButton>
        <SideButton
          isSelected={selectedSetting === 'customize'}
          onSelect={() => handleSelect('customize')}
        >
          Customize
        </SideButton>
      </nav>

      <div className='container-form'>
        <Header />
        {selectedSetting === 'content' ? <ContentForm /> : <CustomizeForm />}
      </div>
    </div>
  );
}
