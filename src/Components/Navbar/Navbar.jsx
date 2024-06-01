import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const history = useNavigate();
  const [menu, setMenu] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMenuClick = (menuName, id) => {
    setMenu(menuName);
    setIsMenuOpen(false);
    smoothScrollTo(id);
  };

  const handleLinkClick = (route, id) => {
    history.push(route);
    smoothScrollTo(id);
  };

  return (
    <div className='navbar'>
      <span className='logo-text'>GANESH DADIPELLI</span>
      <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to={"/"} className="anchor-link" onClick={() => handleMenuClick('home', 'home')}>
              <p>Home</p>
              {menu === 'home' && <img src={underline} alt="underline" />}
            </Link>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#about" onClick={() => handleMenuClick('about', 'about')}>
              <p>AboutMe</p>
              {menu === 'about' && <img src={underline} alt="underline" />}
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#services" onClick={() => handleMenuClick('services', 'services')}>
              <p>Services</p>
              {menu === 'services' && <img src={underline} alt="underline" />}
            </AnchorLink>
          </li>
          <li>
            <Link to="/portfolio" className="anchor-link" onClick={() => handleLinkClick('/portfolio', 'portfolio')}>
              <p>Portfolio</p>
              {menu === 'portfolio' && <img src={underline} alt="underline" />}
            </Link>
          </li>
          <li>
            <AnchorLink className="anchor-link gani" offset={50} href="#contact" onClick={() => handleMenuClick('contact', 'contact')}>
              <p>Contact</p>
              {menu === 'contact' && <img src={underline} alt="underline" />}
            </AnchorLink>
          </li>
        </ul>
      </div>
      <div className="nav-connect">Connect With Me</div>
      <div className="hamburger" onClick={handleMenuToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Navbar;
