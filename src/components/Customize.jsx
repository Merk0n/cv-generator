import '../styles/Customize.css';

export default function Customize({
  isLayout,
  onChangeLayout,
  isBGColor,
  onBGChangeColor,
  isTextColor,
  onTextChangeColor,
  isFont,
  onFontChange,
}) {
  return (
    <div className='customize'>
      <div className='customize-option'>
        <h2>Customize</h2>
        <hr className='dark-hr' />
        <h2>Layout</h2>
        <div className='layout-options'>
          <button onClick={() => onChangeLayout('top')}>
            <div
              style={{
                background: `linear-gradient(180deg, ${isBGColor} 50%, #fff 50%)`,
              }}
              className={`${
                isLayout === 'top' && 'active-layout'
              } custom-setting top-layout`}
            ></div>
            <span className='button-title'>TOP</span>
          </button>
          <button onClick={() => onChangeLayout('left')}>
            <div
              style={{
                background: `linear-gradient(90deg, ${isBGColor} 50%, #fff 50%)`,
              }}
              className={`
              ${
                isLayout === 'left' && 'active-layout'
              } custom-setting left-layout`}
            ></div>
            <span className='button-title'>LEFT</span>
          </button>
        </div>
      </div>

      <div className='customize-option'>
        <h2>Color</h2>
        <div className='color-options'>
          <div className='custom-options'>
            <span>Accent Color:</span>
            <input
              onChange={(e) => onBGChangeColor(e.target.value)}
              className='rounded-input'
              type='color'
              value={isBGColor}
            />
          </div>
          <div className='custom-options'>
            <span>Text Color:</span>
            <input
              onChange={(e) => onTextChangeColor(e.target.value)}
              className='rounded-input'
              type='color'
              value={isTextColor}
            />
          </div>
          <div className='custom-options'>
            <span>Set default colors</span>
            <button
              className='custom-button'
              onClick={() => {
                onBGChangeColor('#000000');
                onTextChangeColor(`#ffffff`);
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className='customize-option'>
        <h2>Font</h2>
        <div className='font-options'>
          <button
            className='custom-font poppins-font'
            onClick={() => onFontChange('Poppins')}
          >
            <div
              className={`${
                isFont === 'Poppins' && 'active-layout'
              } border-icon`}
            >
              <span className='button-title'>Aa</span>
              <span className='button-title'>Poppins</span>
            </div>
          </button>
          <button
            className='custom-font roboto-font'
            onClick={() => onFontChange('Roboto')}
          >
            <div
              className={`${
                isFont === 'Roboto' && 'active-layout'
              } border-icon`}
            >
              <span className='button-title '>Aa</span>
              <span className='button-title'>Roboto</span>
            </div>
          </button>
          <button
            className='custom-font arial-font'
            onClick={() => onFontChange('Arial')}
          >
            <div
              className={`${isFont === 'Arial' && 'active-layout'} border-icon`}
            >
              <span className='button-title '>Aa</span>
              <span className='button-title'>Arial</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
