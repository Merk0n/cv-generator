import '../styles/Customize.css';

export default function Customize({
  isLayout,
  onChangeLayout,
  isColor,
  onChangeColor,
}) {
  return (
    <div className='customize'>
      <div className='customize-option'>
        <h2>Layout</h2>
        <div className='layout-options'>
          <button
            className={isLayout === 'top' && 'active-layout'}
            onClick={() => onChangeLayout('top')}
          >
            <div
              className={`${
                isLayout === 'top' && 'active-layout'
              } custom-setting top-layout`}
            ></div>
            TOP
          </button>
          <button onClick={() => onChangeLayout('left')}>
            <div
              className={`${
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
          Accent Color:
          <input
            onChange={(e) => onChangeColor(e.target.value)}
            className='rounded-input'
            type='color'
            value={isColor}
          />
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
