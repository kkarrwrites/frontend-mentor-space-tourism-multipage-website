import { Link } from 'react-router-dom';

import Logo from '../assets/img/shared/logo.svg';

function Nav() {
  return (
    <nav>
      <img src={Logo} alt="Logo" />
      <ul className="ff-sans-condensed fs-sm letter-spacing-2-7 uppercase text-white">
        <li>
          <Link to="/">
            <span className="bold">00</span> Home
          </Link>
        </li>
        <li>
          <Link to="/destination">
            <span className="bold">01</span> Destination
          </Link>
        </li>
        <li>
          <Link to="/crew">
            <span className="bold">02</span> Crew
          </Link>
        </li>
        <li>
          <Link to="technology">
            <span className="bold">03</span> Technology
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
