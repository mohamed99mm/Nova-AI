// components/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <nav className="navbar navbar-expand-md tm-navbar" id="tmNav">              
      <div className="container">   
        <div className="tm-next">
          <img src="static/img/logo.png" alt="Logo" className="tm-site-logo img-fluid" />
          <a href="#infinite" className="navbar-brand">Nova AI</a>
        </div>      
                
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars navbar-toggler-icon"></i>
        </button>
        
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link tm-nav-link" href="#infinite" onClick={(e) => handleSmoothScroll(e, '#infinite')}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link tm-nav-link" href="#whatwedo" onClick={(e) => handleSmoothScroll(e, '#whatwedo')}>What We Do</a>
            </li>
            <li className="nav-item">
              <a className="nav-link tm-nav-link" href="#testimonials" onClick={(e) => handleSmoothScroll(e, '#testimonials')}>Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link tm-nav-link" href="#gallery" onClick={(e) => handleSmoothScroll(e, '#gallery')}>Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link tm-nav-link" href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a>
            </li>                    
          </ul>
        </div>        
      </div>
    </nav>
  );
};

export default Navbar;