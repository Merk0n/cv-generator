import Header from './Header.jsx';
import '../styles/CVForm.css';
import { useState } from 'react';
import SideButton from './SideButton.jsx';
import CustomizeForm from './CustomizeForm.jsx';
import ContentForm from './ContentForm.jsx';
import Tabs from './Tabs.jsx';

export default function CVForm() {
  const [selectedSetting, setSelectedSetting] = useState('content');

  function handleSelect(selectedButton) {
    setSelectedSetting(selectedButton);
  }

  return (
    <div className='cv-form'>
      <Tabs
        className='sidebar'
        ButtonsContainer='nav'
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
      ></Tabs>

      <Header />
      {selectedSetting === 'content' ? <ContentForm /> : <CustomizeForm />}
    </div>
  );
}
