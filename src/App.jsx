import './App.css';
import { useState } from 'react';
import CustomButton from './components/CustomButton.jsx';
import Card from './components/Card.jsx';
import Personal from './components/Personal.jsx';
import SwitchButton from './components/SwitchButton.jsx';
import CreateBy from './components/CreateBy.jsx';

function App() {
  const [clear, setClear] = useState([
    {
      name: '',
      email: '',
      phoneNumber: '',
      address: '',
      bio: '',
    },
  ]);

  const [loadExample, setLoadExample] = useState([
    {
      name: 'John Doe',
      email: 's',
      phoneNumber: '123-456-7890',
      address: '1234 Elm St, Springfield, IL 62701',
      bio: 'I am a software developer with a passion for web development.',
    },
  ]);

  const [personal, setPersonal] = useState([
    {
      name: '',
      email: '',
      phoneNumber: '',
      address: '',
      bio: '',
    },
  ]);

  const [selectedSetting, setSelectedSetting] = useState('content');

  function handleSelect(selectedButton) {
    setSelectedSetting(selectedButton);
  }

  const clearForm = () => {
    setPersonal(clear);
  };

  const loadForm = () => {
    setPersonal(loadExample);
  };

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
        <div className='header-box'>
          <h1>cv generator</h1>

          <SwitchButton />

          <div className='header-btn'>
            <CustomButton onSelect={clearForm}>Clear</CustomButton>
            <CustomButton onSelect={loadForm}>Load example</CustomButton>
          </div>
          <CreateBy />
        </div>

        <div className='main-form'>
          <Card title='Personal Info'>
            <Personal state={personal} setState={setPersonal} />
          </Card>

          <Card title='Personal Info'>
            <Personal state={personal} setState={setPersonal} />
          </Card>
        </div>
      </div>
      <div className='cv-right'>
        <h1>Preview</h1>
      </div>
    </div>
  );
}

export default App;
