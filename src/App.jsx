import './App.css';
import { useState } from 'react';
import CustomButton from './components/CustomButton.jsx';
import Card from './components/Card.jsx';
import Personal from './components/Personal.jsx';
import SwitchButton from './components/SwitchButton.jsx';
import CreateBy from './components/CreateBy.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import CVPreview from './components/CVPreview.jsx';
import TemplateLoader from './components/TemplateLoader.jsx';
import exampleData from './components/exampleData.js';
import Customize from './components/Customize.jsx';

function App() {
  const [personalInfo, setPersonalInfo] = useState([exampleData.personalInfo]);

  const [experienceInfo, setExperienceInfo] = useState([
    exampleData.experience,
  ]);

  const [educationInfo, setEducationInfo] = useState([exampleData.education]);

  const [selectedSetting, setSelectedSetting] = useState('content');

  function handleSelect(chosenSetting) {
    setSelectedSetting(chosenSetting);
  }

  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleThemeChange() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={`app ${isDarkMode && 'dark-theme'}`}>
      <div className='cv-form'>
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

          <SwitchButton onSelect={handleThemeChange} isSelected={isDarkMode} />

          <TemplateLoader
            onClear={() => {
              setPersonalInfo([
                {
                  name: '',
                  email: '',
                  phoneNumber: '',
                  address: '',
                  bio: '',
                },
              ]);
              setEducationInfo([
                {
                  school: '',
                  degree: '',
                  startDate: '',
                  endDate: '',
                },
              ]);
              setExperienceInfo([
                {
                  job: '',
                  employer: '',
                  startDate: '',
                  endDate: '',
                  description: '',
                },
              ]);
            }}
            onTemplateLoad={() => {
              setPersonalInfo([exampleData.personalInfo]);
              setExperienceInfo([exampleData.experience]);
              setEducationInfo([exampleData.education]);
            }}
          />

          <CreateBy />
        </div>

        <div className='main-form'>
          {selectedSetting === 'content' ? (
            <>
              <Card title='Personal Info'>
                <Personal state={personalInfo} setState={setPersonalInfo} />
              </Card>
              <Card title='Experience'>
                <Experience
                  state={experienceInfo}
                  setState={setExperienceInfo}
                />
              </Card>
              <Card title='Education'>
                <Education state={educationInfo} setState={setEducationInfo} />
              </Card>
            </>
          ) : (
            <Card title='Customize'>
              <Customize />
            </Card>
          )}
        </div>
      </div>
      <div className='cv-preview'>
        <div className='cv-print'>
          <CVPreview
            personal={personalInfo}
            experience={experienceInfo}
            education={educationInfo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
