import '../css/Header.css';
import { Link } from 'react-router-dom';

const NavLinks = () => (
  <header>
    <h1 className="navbar-heading nav-item-color">Math Magician</h1>
    <nav className="nav-links">
      <Link className="nav-item nav-item-color" to="/">Home</Link>
      <Link className="nav-item nav-item-color" to="/calculator">Calculator</Link>
      <Link className="nav-item nav-item-color" to="/quote">Quote</Link>
    </nav>
  </header>
);

export default NavLinks;
