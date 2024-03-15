export default function TemplateLoader({ onTemplateLoad, onClear }) {
  return (
    <div className='header-buttons'>
      <button className='custom-button' onClick={onClear}>
        Clear
      </button>
      <button className='custom-button' onClick={onTemplateLoad}>
        Load example
      </button>
    </div>
  );
}
