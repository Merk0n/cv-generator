import '../styles/Customize.css';
export default function Customize() {
  return (
    <div className='customize'>
      <div className='customize-option'>
        <h2>Layout</h2>
        <div className='layout-options'>
          <button>
            <div className='custom-setting top-layout'></div>
            TOP
          </button>
          <button>
            <div className='custom-setting left-layout'></div>
            LEFT
          </button>
        </div>
      </div>

      <div className='customize-option'>
        <h2>Color</h2>
        <div className='color-options'>
          Accent Color:
          <input className='rounded-input' type='color' value={'#0e374e'} />
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
