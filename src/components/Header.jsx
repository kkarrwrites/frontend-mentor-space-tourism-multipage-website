import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../assets/img/shared/logo.svg';
import HamburgerOpen from '../assets/img/shared/icon-hamburger.svg';
import HamburgerClose from '../assets/img/shared/icon-close.svg';

function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header className="header__container">
      <div className="logo">
        <NavLink to="/" className="logo-link">
          <img src={Logo} alt="Logo" />
        </NavLink>
      </div>
      <button aria-controls="primary-navigation">
        <span className="sr-only" aria-expanded="false">
          Menu
        </span>
        <img
          src={isNavExpanded ? HamburgerClose : HamburgerOpen}
          alt="Hamburger Menu"
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        />
      </button>
      <nav>
        <ul
          id="primary-navigation"
          className={isNavExpanded ? 'nav__menu-expanded' : 'nav__menu'}
        >
          <li className="nav__menu-item">
            <NavLink to="/" className="nav__link">
              <span className="bold">00</span> Home
            </NavLink>
          </li>
          <li className="nav__menu-item">
            <NavLink to="/destination" className="nav__link">
              <span className="bold">01</span> Destination
            </NavLink>
          </li>
          <li className="nav__menu-item">
            <NavLink to="/crew" className="nav__link">
              <span className="bold">02</span> Crew
            </NavLink>
          </li>
          <li className="nav__menu-item">
            <NavLink to="technology" className="nav__link">
              <span className="bold">03</span> Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
