// components/Hero.js
import React from 'react';

const Hero = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="infinite" className="text-white tm-font-big tm-parallax">
      <div className="text-center tm-hero-text-container">
        <div className="tm-hero-text-container-inner">
          <h2 className="tm-hero-title">Explore the world of AI</h2>
        </div>        
      </div>

      <div className="tm-next tm-intro-next">
        <a href="#whatwedo" className="text-center tm-down-arrow-link" onClick={(e) => handleScroll(e, '#whatwedo')}>
          <i className="fas fa-2x fa-arrow-down tm-down-arrow"></i>
        </a>
      </div>      
    </section>
  );
};

export default Hero;