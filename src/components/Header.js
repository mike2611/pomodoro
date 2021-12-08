import clockLogo from '../img/logo-timer.gif'

const Header = () => (
    <nav class="navbar navbar-expand-lg navbar-dark bg-color1">
    <div class="navbar-brand me-3 me-md-auto d-flex align-items-center">
        <h1 class="ms-3">PomoTimer</h1>
        <img class="logo-timer ms-2" src={clockLogo}/>
    </div>
    <div class="me-3 mt-3">
        <ul class="navbar-nav">
        <li class="nav-item active">
            <a class="nav-link" href="#"> 
                <h2 class="nav-text"> Timer </h2> 
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">
                <h2 class="nav-text"> About </h2> 
            </a>
        </li>
        </ul>
    </div>
    </nav>
);

export default (Header);