import { Link } from 'react-router-dom';

import Logo from '../assets/img/shared/logo.svg';

function Nav() {
  return (
    <>
      <nav>
        <Link to="/" className="nav">
          <img src={Logo} alt="Logo" />
        </Link>
        <ul>
          <li>
            <Link to="/" className="nav">
              <span className="bold">00</span> Home
            </Link>
          </li>
          <li>
            <Link to="/destination" className="nav">
              <span className="bold">01</span> Destination
            </Link>
          </li>
          <li>
            <Link to="/crew" className="nav">
              <span className="bold">02</span> Crew
            </Link>
          </li>
          <li>
            <Link to="technology" className="nav">
              <span className="bold">03</span> Technology
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
