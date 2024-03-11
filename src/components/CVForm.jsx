import Header from './Header.jsx';
import '../styles/CVForm.css';
import { useState } from 'react';
import SettingsForm from './SettingsForm.jsx';
import Sidebar from './Sidebar.jsx';

export default function CVForm() {
  const [selectedSetting, setSelectedSetting] = useState('content');

  function handleSelect(selectedButton) {
    setSelectedSetting(selectedButton);
  }

  return (
    <div className='cv-form'>
      <nav className='sidebar'>
        <Sidebar
          selectedSetting={selectedSetting}
          handleSelect={handleSelect}
        />
      </nav>

      <div className='container-form'>
        <Header />
        {selectedSetting === 'content' ? (
          <SettingsForm formType={'content'} />
        ) : (
          <SettingsForm formType={'customize'} />
        )}
      </div>
    </div>
  );
}
