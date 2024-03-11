import SideButton from './SideButton';

export default function Sidebar({ selectedSetting, handleSelect }) {
  return (
    <nav className='sidebar'>
      <SideButton
        isSelected={selectedSetting === 'content'}
        onSelect={() => handleSelect('content')}
      >
        Content
      </SideButton>
      <SideButton
        isSelected={selectedSetting === 'customize'}
        onSelect={() => handleSelect('customize')}
      >
        Customize
      </SideButton>
    </nav>
  );
}
