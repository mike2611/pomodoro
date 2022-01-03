import clockLogo from '../img/logo-timer.gif';
import { NavLink } from 'react-router-dom';


const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-color1">
    <div className="navbar-brand me-3 me-md-auto d-flex align-items-center">
        <h1 className="ms-3">PomoTimer</h1>
        <img className="logo-timer ms-2" src={clockLogo} alt="clockLogo"/>
    </div>
    <div className="me-3 mt-3">
        <ul className="navbar-nav">
        <li className="nav-item active">
            <NavLink className="nav-link-component" to="/"> 
                <div className="nav-link"> 
                  <h2 className="nav-text">Timer</h2>
                </div> 
            </NavLink>
        </li>
        <li>
            <NavLink className="nav-link-component" to="/about">
                <div className="nav-link"> 
                  <h2 className="nav-text">About</h2>
                </div> 
            </NavLink>
        </li>
        </ul>
    </div>
    </nav>
);

export default (Header);