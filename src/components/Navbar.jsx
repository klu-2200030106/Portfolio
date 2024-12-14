import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
  <span>&lt; #Include &gt;</span>
</Link>


        {/* Desktop Navigation */}
        <div className="navbar-links">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path} className="navbar-link">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="navbar-toggle" onClick={toggleMobileMenu}>
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="navbar-mobile-menu">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={toggleMobileMenu}
              className="navbar-mobile-link"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
