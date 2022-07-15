import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-scroll';
import Popup from 'reactjs-popup';
import './Navbar.css';

function Navbar() {
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
          <Link
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to='home'
            className='navbar-logo'
            onClick={closeMobileMenu}>
            SARVESH .
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                href="/"
                activeClass='active'
                spy={true}
                to='home'
                smooth={true}
                offset={-70}
                duration={500}
                style={{ fontFamily: "Roboto" }}
                className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeClass='active'
                spy={true}
                to='about'
                smooth={true}
                offset={-70}
                duration={500}
                style={{ fontFamily: "Roboto" }}
                className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeClass='active'
                spy={true}
                to='resume'
                smooth={true}
                offset={-70}
                duration={500}
                style={{ fontFamily: "Roboto" }}
                className='nav-links' onClick={closeMobileMenu}>
                Resume
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeClass='active'
                spy={true}
                to='contact'
                smooth={true}
                offset={-70}
                duration={500}
                style={{ fontFamily: "Roboto" }}
                className='nav-links' onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
            <li className='nav-item'>
              <a href="/artwork" className='nav-links' style={{ fontFamily: "Roboto" }}>
                Artwork
              </a>
            </li>
            <li className='nav-item'>
              <Popup
                trigger={<a className='nav-links'> <i style={{ color: "#26282B", fontSize: "24px" }} className="fab fa-spotify" /> </a>}
                modal
                nested
                style={{ transition: "all 0.3s ease 0s" }}
              >
                {close => (
                  <div className="modal">
                    <button style={{ boxShadow: "0px 15px 20px rgba(0, 0, 0, 0.1)" }} className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="header"> <i className="fab fa-spotify popupIcon" /> </div>
                    <div className="content">
                      {' '}
                      Check out what Sarvesh is listening to?
                    </div>
                    <div className="actions playlist" >
                      <a className="spotify" href='https://open.spotify.com/playlist/14oD5ZMaZhuP13ZU3ucgQB'>
                        <i className="fi fi-ss-play" style={{padding:"2px", borderRadius:"50px", boxShadow: "0px 4px 11px rgba(0, 0, 0, 0.2)", marginRight:"5px"}}/> Vibing with Chai
                      </a>
                      <a className="spotify" href='https://open.spotify.com/playlist/72XHKJZK1r12lWQmJvkd9A?si=6d1ca38c9fb745ef'>
                        <i className="fi fi-ss-play" style={{padding:"2px", borderRadius:"50px", boxShadow: "0px 4px 11px rgba(0, 0, 0, 0.2)", marginRight:"5px"}}></i> Gloomy Evenings
                      </a>
                    </div>
                  </div>
                )}
              </Popup>
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

export default Navbar;