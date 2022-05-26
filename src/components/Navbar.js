import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaTimes, FaBars } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link'



function Navbar() {

  // To reverse the state of the navbar icon when clicked
  const [click, setClick] = useState(false);
  

    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
  
  // to avoid having the navbar icon toggled when the window is refershed or resized
    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);


    
  
    return (
      <>
        
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <span className='magdy'>Magdy</span>Decoration
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes/> : <FaBars/>}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <HashLink smooth to='/#home' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </HashLink>
              </li>
              
              <li className='nav-item'>
                <HashLink 
                  smooth to='/#services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Services
                </HashLink >
              </li>
              
              <li className='nav-item'>
                <HashLink
                  smooth to='/#projects'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Projects
                </HashLink>
              </li>
  
              <li>
                <HashLink 
                  smooth to='/#footer'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  Contact us
                </HashLink>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline-navbar'>Contact us</Button>}
          </div>
          </nav>
          
      </>
    );
  }
  
  export default Navbar;