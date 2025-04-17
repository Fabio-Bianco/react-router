import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
        Home
      </NavLink>
      <NavLink to="/chi-siamo" className={({ isActive }) => isActive ? "active" : ""}>
        Chi siamo
      </NavLink>
      <NavLink to="/posts" className={({ isActive }) => isActive ? "active" : ""}>
        Posts
      </NavLink>
    </nav>
  );
};

export default Navbar;
