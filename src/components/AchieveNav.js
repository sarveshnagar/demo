import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import './ArtworkNav.css';

function ArtworkNav() {
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

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <a href="/" className='navbar-logo'>
                SARVESH .
            </a>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu-artwork active' : 'nav-menu-artwork'}>
            <li className='nav-item'>
              <a href="/" className='nav-links-artwork' style={{fontFamily:"Roboto"}}>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a href="/artwork" className='nav-links-artwork' style={{fontFamily:"Roboto"}}>
                Artwork
              </a>
            </li>
            <li>
              <a
                href='https://www.buymeacoffee.com/sarveshnagar'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Buy me a Coffee
              </a>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Buy me a Coffee</Button>}
        </div>
      </nav>
    </>
  );
}

export default ArtworkNav;