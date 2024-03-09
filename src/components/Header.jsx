import "../styles/Header.css";

export default function Header() {
  return (
    <>
      <div className='header'>
        <h1>cv generator</h1>

        <label className='switch'>
          <input type='checkbox' />
          <span className='slider'></span>
        </label>
      </div>
      <div>
        Created by icon gh here <a href=''>Merk0n</a>
      </div>
    </>
  );
}
