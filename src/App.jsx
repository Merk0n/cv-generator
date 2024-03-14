import './App.css';
import { useState } from 'react';
import CustomButton from './components/CustomButton.jsx';
import Card from './components/Card.jsx';
import Personal from './components/Personal.jsx';
import SwitchButton from './components/SwitchButton.jsx';
import CreateBy from './components/CreateBy.jsx';
import { FORM_DATA } from './components/formData.js';

function App() {
  const [clear, setClear] = useState(FORM_DATA.emptyAll);

  const [loadExample, setLoadExample] = useState(FORM_DATA.personal);

  const [personal, setPersonal] = useState(FORM_DATA.emptyAll);

  const [experience, setExperience] = useState(FORM_DATA.emptyAll);

  const [education, setEducation] = useState(FORM_DATA.emptyAll);

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

          <Card title='Experience'>
            <Personal state={experience} setState={setExperience} />
          </Card>

          <Card title='Education'>
            <Personal state={education} setState={setEducation} />
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
