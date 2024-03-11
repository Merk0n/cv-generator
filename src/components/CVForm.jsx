import Header from "./Header.jsx";
import "../styles/CVForm.css";
import SideButton from "./SideButton.jsx";
import { useState } from "react";
import ContentForm from './ContentForm.jsx';
import CustomizeForm from './CustomizeForm.jsx';


export default function CVForm() {

  const [selectedSetting, setSelectedSetting] = useState('Content');

  function handleSelect(selectedButton) {
    setSelectedSetting(selectedButton);
  }

  return (
    <div className='cv-form'>
      <nav className='sidebar'>
        <SideButton onSelect={() => handleSelect('Content')}>Content</SideButton>
        <SideButton onSelect={() => handleSelect('Customize')}>Customize</SideButton>
      </nav>

      <div className='container-form'>
        <Header />
        {selectedSetting === 'Content' ? <ContentForm /> : <CustomizeForm />}
      </div>
    </div>
  );
}
