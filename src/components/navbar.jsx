import React, { useState } from 'react';
import logo from '/Users/ringo/Desktop/coca-cola-landing-page/src/images/logo.png'
import '/Users/ringo/Desktop/coca-cola-landing-page/src/App.css';
import { PiCaretDownLight } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="header">
      <div className="header-container">
        <div className="nav-elements">
          <button className="hamburger-menu" onClick={toggleMenu}>
            <div className="hamburger-icon"></div>
            <div className="hamburger-icon"></div>
            <div className="hamburger-icon"></div>
          </button>

          <div className='logo'>
            <img src={logo} alt=''></img>
          </div>
          <ul id='nav-ul' className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <a className='nav-links' href="home">Brand</a>
            </li>
            <li style={{margin:"0 0px 0 0"}}>
              <a href="projects" class="dropdown">
                <button class="dropbtn">Discover 
                <PiCaretDownLight />
                </button>
                <div class="dropdown-content">
                  <a href="#h">Link 1</a>
                  <a href="#h">Link 2</a>
                  <a href="#h">Link 3</a>
                </div>
              </a>
            </li>
            <li style={{margin:"0 0px 0 0"}}>
              <a href="projects" class="dropdown">
                <button class="dropbtn">Impact
                <PiCaretDownLight className="header-icon" />
                </button>
                <div class="dropdown-content">
                  <a href="#h">Link 1</a>
                  <a href="#h">Link 2</a>
                  <a href="#h">Link 3</a>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div className='search-div' style={{color:"black"}}>  
          <div>
          <IoIosSearch style={{fontSize:"30px"}} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;