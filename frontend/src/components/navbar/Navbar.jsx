// Navbar.jsx
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css'; // Make sure to create and style your CSS file

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkHover = (category) => {
    setHoveredLink(category);
  };

  const handleLinkLeave = () => {
    setHoveredLink(null);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <nav className="navbar">
      <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`}>
        <Link to="/product" className='li'>Product</Link>
        <Link to="https://www.linkedin.com/in/ahmad-touseef-996788205/" className='li'>Contact</Link>
        <Link to="/docs" className='li'>Docs</Link>
        <Link to="/about" className='li'>About</Link>
      </div>
      <i className={`ab fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} hamburger-lines`} onClick={toggleMenu}></i>
      <div className="navbar-logo">
        <Link to="/" className='logo'>TubeX</Link>
      </div>
      <div className="navbar-links">
        <Link to="/product" className='li'>Product</Link>
        <Link to="https://www.linkedin.com/in/ahmad-touseef-996788205/" className='li'>Contact</Link>
        <Link to="/docs" className='li'>Docs</Link>
        <Link to="/about" className='li'>About</Link>
      </div>
      <div className="navbar-auth">
        <Link to="/login" className="navbar-get-started">Sign in</Link>
      </div>
    </nav>
  );
};

export default Navbar;
