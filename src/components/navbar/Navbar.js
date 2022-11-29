import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './navbar.css';

function Navbar() {
    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleClick = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/login")
    };

    return (
        <div className='navbar'>
            <div className='navContainer'>
                <Link to='/' style={{ color: "inherit", textDecoration: "none" }}>
                    <span className='logo'>Airbnb</span>
                </Link>
                {user ?
                    <div>
                        {user.username}
                        <button onClick={handleClick} className='navButton'>Logout</button>
                    </div>
                    : (<div className='navItem'>
                        <button className='navButton'>Register</button>
                        <Link to='/login'><button className='navButton'>Login</button></Link>
                    </div>)}
            </div>
        </div>
    )
}

export default Navbar