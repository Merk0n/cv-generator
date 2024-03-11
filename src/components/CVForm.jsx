import Header from './Header.jsx';
import '../styles/CVForm.css';
import { useState } from 'react';
import SideButton from './SideButton.jsx';
import CustomizeForm from './CustomizeForm.jsx';
import ContentForm from './ContentForm.jsx';
import SideTab from './SideTab.jsx';

export default function CVForm() {
  const [selectedSetting, setSelectedSetting] = useState('content');

  function handleSelect(selectedButton) {
    setSelectedSetting(selectedButton);
  }

  return (
    <div className='cv-form'>
      <SideTab
        className='sidebar'
        buttons={
          <>
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
          </>
        }
      ></SideTab>

      <div className='container-form'>
        <Header />
        {selectedSetting === 'content' ? <ContentForm /> : <CustomizeForm />}
      </div>
    </div>
  );
}
