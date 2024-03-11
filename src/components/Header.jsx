import "../styles/Header.css";
import ghIcon from "../assets/github-icon.svg";
import SideButton from "./SideButton";
import { useState } from "react";

export default function Header() {

  const [personalInfo, setPersonalInfo] = useState('xd');

  function handleSelect(selectedButton) {
    //selectedButton => "Clear" , "Load example"
    setPersonalInfo(selectedButton)
    console.log(selectedButton);
  }

  return (
    <>
      <div className='header-box'>
        <div className='header'>
          <h1>cv generator</h1>

          <label className='switch'>
            <input type='checkbox' />
            <span className='slider'></span>
          </label>

          <div className='header-btn'>
            <SideButton textColor={"#ff0000"} onSelect={() => handleSelect('clear')}>
              Clear
            </SideButton>
            <SideButton onSelect={() => handleSelect('load')}>Load example</SideButton>
          </div>
        </div>
        <div className='create-by'>
          Created by Merk0n
          <a href='https://github.com/Merk0n/cv-generator'>
            <img className='ghIcon' src={ghIcon} alt='github' />
          </a>
          {personalInfo}
        </div>
      </div>
    </>
  );
}
