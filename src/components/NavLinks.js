import { Link } from 'react-router-dom';

const NavLinks = () => (
  <header>
    <h1>Math Magician</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="Calculator">Calculator</Link>
      <Link to="quote">Quote</Link>
    </nav>
  </header>
);

export default NavLinks;
