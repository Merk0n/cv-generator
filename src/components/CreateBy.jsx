import ghIcon from '../assets/github-icon.svg';

export default function CreateBy() {
  return (
    <div className='create-by'>
      Created by Merk0n
      <a href='https://github.com/Merk0n/cv-generator'>
        <img className='gIcon' src={ghIcon} alt='github' />
      </a>
    </div>
  );
}
