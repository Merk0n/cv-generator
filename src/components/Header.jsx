import '../styles/Header.css';
import SwitchButton from './SwitchButton';
import HeaderButton from './HeaderButton';
import CreateBy from './CreateBy';

export default function Header() {
  const loadClick = (e) => {
    e.target.textContent = 'Clearing...';
  };

  return (
    <>
      <div className='header-box'>
        <h1>cv generator</h1>

        <SwitchButton />

        <div className='header-btn'>
          <HeaderButton textColor={'#ff0000'} onSelect={(e) => loadClick(e)}>
            Clear
          </HeaderButton>
          <HeaderButton onSelect={(e) => loadClick(e)}>
            Load example
          </HeaderButton>
        </div>
        <CreateBy />
      </div>
    </>
  );
}
