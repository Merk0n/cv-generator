import './App.css';
import Header from './components/Header.jsx';
import { useState } from 'react';
import CustomButton from './components/CustomButton.jsx';
import SettingsForm from './components/SettingsForm.jsx';

function App() {
  const [selectedSetting, setSelectedSetting] = useState('content');

  function handleSelect(selectedButton) {
    setSelectedSetting(selectedButton);
  }

  return (
    <div className='app'>
      <div className='cv-left'>
        <div className='sidebar'>
          <CustomButton
            isSelected={selectedSetting === 'content'}
            onSelect={() => handleSelect('content')}
          >
            Content
          </CustomButton>
          <CustomButton
            isSelected={selectedSetting === 'customize'}
            onSelect={() => handleSelect('customize')}
          >
            Customize
          </CustomButton>
        </div>
        <Header />
        <div className='settings-form'>
          {selectedSetting === 'content' ? (
            <SettingsForm option={'content'} />
          ) : (
            <SettingsForm option={'customize'} />
          )}
        </div>
      </div>
      <div className='cv-right'>
        <h1>Preview</h1>
      </div>
    </div>
  );
}

export default App;
