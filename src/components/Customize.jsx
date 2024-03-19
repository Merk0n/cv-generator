import '../styles/Customize.css';

export default function Customize({
  isLayout,
  onChangeLayout,
  isBGColor,
  onBGChangeColor,
  isTextColor,
  onTextChangeColor,
}) {
  return (
    <div className='customize'>
      <div className='customize-option'>
        <h2>Customize</h2>
        <hr className='dark-hr' />
        <h2>Layout</h2>
        <div className='layout-options'>
          <button
            className={isLayout === 'top' && 'active-layout'}
            onClick={() => onChangeLayout('top')}
          >
            <div
              style={{
                background: `linear-gradient(180deg, ${isBGColor} 50%, #fff 50%)`,
              }}
              className={`${
                isLayout === 'top' && 'active-layout'
              } custom-setting top-layout`}
            ></div>
            TOP
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
            LEFT
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
          <button className='roboto-font'>
            <span className='custom-font'>Aa</span>
            Roboto
          </button>
          <button className='arial-font'>
            <span className='custom-font'>Aa</span>
            Arial
          </button>
        </div>
      </div>
    </div>
  );
}
