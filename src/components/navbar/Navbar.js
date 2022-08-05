import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navContainer'>
                <Link to='/' style={{color:"inherit", textDecoration:"none"}}>
                <span className='logo'>Airbnb</span>
                </Link>
                <div className='navItem'>
                    <button className='navButton'>Register</button>
                    <button className='navButton'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar