import "../styles/Header.css";

export default function Header () {
    return (
        <header className='header'>
            <h1>cv generator</h1>

            <label className='switch'>
                <input type="checkbox"/>
            <span className="slider"></span>
            </label>
           
        </header>
    )
}