import './App.css';
import { useState } from 'react';
import CustomButton from './components/CustomButton.jsx';
import Card from './components/Card.jsx';
import Personal from './components/Personal.jsx';
import SwitchButton from './components/SwitchButton.jsx';
import CreateBy from './components/CreateBy.jsx';
import { FORM_DATA } from './components/formData.js';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';

function App() {
  const [clear, setClear] = useState(FORM_DATA.emptyAll);

  const [loadExample, setLoadExample] = useState(FORM_DATA.personal);

  const [personal, setPersonal] = useState([
    {
      name: 'John Doe',
      email: 'xd@xd.com',
      phoneNumber: '123-456-7890',
      address: '1234 Elm St, Springfield, IL 62701',
      bio: 'I am a software developer with a passion for web development.',
    },
  ]);

  const [experience, setExperience] = useState([
    {
      job: 'Software Developer',
      employer: 'ABC Company',
      startDate: '2020-06-01',
      endDate: '2024-06-01',
      description: 'I develop software for the company.',
    },
  ]);

  const [education, setEducation] = useState([
    {
      school: 'Moon Space Lab',
      degree: 'BSc Science',
      startDate: '2020-09-01',
      endDate: '2024-06-01',
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
          <hr />
          <Card title='Experience'>
            <Experience state={experience} setState={setExperience} />
          </Card>
          <hr />
          <Card title='Education'>
            <Education state={education} setState={setEducation} />
          </Card>
          <hr />
        </div>
      </div>
      <div className='cv-right'>
        <h1>Preview</h1>
      </div>
    </div>
  );
}

export default App;
