import "../styles/Header.css";
import ghIcon from "../assets/github-icon.svg";
import SideButton from "./SideButton";

export default function Header() {

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
            <SideButton textColor={"#ff0000"}>Clear</SideButton>
            <SideButton>Load example</SideButton>
          </div>
        </div>
        <div className='create-by'>
          Created by Merk0n
          <a href='https://github.com/Merk0n/cv-generator'>
            <img className='ghIcon' src={ghIcon} alt='github' />
          </a>
        </div>
      </div>
    </>
  );
}
