import { Link } from 'react-router-dom';

import Logo from '../assets/img/shared/logo.svg';

function Header() {
  return (
    <header className="header__container">
      <div className="logo">
        <Link to="/" className="logo-link">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <button aria-controls="primary-navigation">
        <span className="sr-only" aria-expanded="false">
          Menu
        </span>
      </button>
      <nav>
        <ul id="primary-navigation" className="nav__menu">
          <li className="nav__menu-item">
            <Link to="/" className="nav__link">
              <span className="bold">00</span> Home
            </Link>
          </li>
          <li className="nav__menu-item">
            <Link to="/destination" className="nav__link">
              <span className="bold">01</span> Destination
            </Link>
          </li>
          <li className="nav__menu-item">
            <Link to="/crew" className="nav__link">
              <span className="bold">02</span> Crew
            </Link>
          </li>
          <li className="nav__menu-item">
            <Link to="technology" className="nav__link">
              <span className="bold">03</span> Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
