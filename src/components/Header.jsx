import '../styles/Header.css';
import SwitchButton from './SwitchButton';
import CreateBy from './CreateBy';
import CustomButton from './CustomButton';

export default function Header() {
  return (
    <>
      <div className='header-box'>
        <h1>cv generator</h1>

        <SwitchButton />

        <div className='header-btn'>
          <CustomButton>Clear</CustomButton>
          <CustomButton>Load example</CustomButton>
        </div>
        <CreateBy />
      </div>
    </>
  );
}
