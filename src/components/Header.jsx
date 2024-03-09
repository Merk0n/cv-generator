import "../styles/Header.css";
import ghIcon from "../assets/github-icon.svg";

export default function Header() {
  return (
    <>
      <div className='header'>
        <h1>cv generator</h1>

        <label className='switch'>
          <input type='checkbox' />
          <span className='slider'></span>
        </label>
        <a href='https://github.com/Merk0n/cv-generator'>
          <div className='create-by'>
            Created by
            <div>Merk0n</div>
            <img className='ghIcon' src={ghIcon} alt='github' />
          </div>
        </a>
      </div>
    </>
  );
}
