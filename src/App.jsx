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
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import TechStack from './components/TechStack.jsx';

function App() {
  const [personalInfo, setPersonalInfo] = useState([exampleData.personalInfo]);

  const [experienceInfo, setExperienceInfo] = useState([
    exampleData.experience,
  ]);

  const [educationInfo, setEducationInfo] = useState([exampleData.education]);

  const [techStackInfo, setTechStackInfo] = useState([exampleData.techStack]);

  const [selectedSetting, setSelectedSetting] = useState('content');

  function handleSelect(chosenSetting) {
    setSelectedSetting(chosenSetting);
  }

  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleThemeChange() {
    setIsDarkMode(!isDarkMode);
  }

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'CV',
    pageStyle:
      '@media print { body { -webkit-print-color-adjust: exact; } @page { size: A4; margin: 0 } }',
  });

  const [layout, setLayout] = useState('top');

  const [isBGColor, setIsBGColor] = useState('#000000');

  const [isTextColor, setIsTextColor] = useState('#ffffff');

  const [isFont, setIsFont] = useState('Poppins');

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
                  photo: '',
                  name: '',
                  email: '',
                  phoneNumber: '',
                  address: '',
                  bio: '',
                },
              ]);
              setExperienceInfo([
                {
                  companyName: '',
                  positionTitle: '',
                  location: '',
                  startDate: '',
                  endDate: '',
                  description: '',
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
              setTechStackInfo([
                {
                  languages: '',
                  frameworks: '',
                  databases: '',
                  tools: '',
                },
              ]);
            }}
            onTemplateLoad={() => {
              setPersonalInfo([exampleData.personalInfo]);
              setExperienceInfo([exampleData.experience]);
              setEducationInfo([exampleData.education]);
              setTechStackInfo([exampleData.techStack]);
            }}
            onSave={handlePrint}
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
              <Card title='Tech stack'>
                <TechStack state={techStackInfo} setState={setTechStackInfo} />
              </Card>
            </>
          ) : (
            <Customize
              isLayout={layout}
              onChangeLayout={setLayout}
              isBGColor={isBGColor}
              onBGChangeColor={setIsBGColor}
              isTextColor={isTextColor}
              onTextChangeColor={setIsTextColor}
              isFont={isFont}
              onFontChange={setIsFont}
            />
          )}
        </div>
      </div>
      <div className='cv-preview'>
        <div className='cv-print' ref={componentRef}>
          <CVPreview
            personal={personalInfo}
            experience={experienceInfo}
            education={educationInfo}
            techStack={techStackInfo}
            layout={layout}
            bgcolor={isBGColor}
            textcolor={isTextColor}
            font={isFont}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
