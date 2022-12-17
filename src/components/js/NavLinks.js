import '../css/Header.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Home } from '../images/icons/home.svg';
import { ReactComponent as Calculator } from '../images/icons/calculator.svg';
import { ReactComponent as Quote } from '../images/icons/quote.svg';

const NavLinks = () => (
  <header>
    <h1 className="navbar-heading nav-item-color">Math Magician</h1>
    <nav className="nav-links">
      <Link className="nav-item nav-item-color single-nav-link" to="/">
        <Home />
        <span>Home</span>
      </Link>
      <Link className="nav-item nav-item-color single-nav-link" to="/calculator">
        <Calculator />
        <span>Calculator</span>
      </Link>
      <Link className="nav-item nav-item-color single-nav-link" to="/quote">
        <Quote />
        <span>Quote</span>
      </Link>
    </nav>
  </header>
);

export default NavLinks;
