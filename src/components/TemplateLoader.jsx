import printIcon from '../assets/printer.svg';

export default function TemplateLoader({ onTemplateLoad, onClear, onSave }) {
  return (
    <div className='header-buttons'>
      <button className='custom-button' onClick={onClear}>
        Clear
      </button>
      <button className='custom-button' onClick={onTemplateLoad}>
        Load example
      </button>
      <button className='custom-button' onClick={onSave}>
        <img
          style={{ height: '20px', width: '20px' }}
          className='custom-icon'
          src={printIcon}
          alt='print'
        />
        Save/Print
      </button>
    </div>
  );
}
