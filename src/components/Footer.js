import React from 'react';
import './Footer.css';
import Popup from 'reactjs-popup';
import { Link } from 'react-scroll';

function Footer() {
  return (
    <div className='footer-container' id='contact'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Hey Ya! Now that you know me, Let's connect.
        </p>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Links</h2>
            <a href='https://www.buymeacoffee.com/sarveshnagar'>Buy me a Coffee</a>
            <a href="/artwork" > Artwork </a>
            <Link 
                activeClass='active' 
                spy={true} 
                to='about' 
                smooth={true}
                offset={-70}
                duration={500}
                style={{cursor:"pointer"}}>
                About
              </Link>
              <Link 
                activeClass='active' 
                spy={true} 
                to='resume' 
                smooth={true}
                offset={-70}
                duration={500}
                style={{cursor:"pointer"}}>
                Resume
              </Link>
              <Link 
                activeClass='active' 
                spy={true} 
                to='home' 
                smooth={true}
                offset={-70}
                duration={500}
                style={{cursor:"pointer"}}>
                Back to top
              </Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.instagram.com/sarveshh__/'>Instagram</a>
            <a href='https://www.facebook.com/sarvesh.nagar.9/'>Facebook</a>
            <a href='https://www.linkedin.com/in/sarvesh-nagar/'>LinkedIn</a>
            <a href='https://github.com/sarveshnagar'>Github</a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Projects</h2>
            <a href='https://reactcloudy.netlify.app/' >Cloudy</a>
            <a href='https://github.com/sarveshnagar/RailApp'>RailApp</a>
            <a href='https://github.com/sarveshnagar/CMS'>Complaint Management System</a>
            <a href='https://github.com/sarveshnagar/Image-Processing'>Image Processing Portal</a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link activeClass='active' 
              spy={true} 
              to='home' 
              smooth={true}
              offset={-70}
              duration={500} 
              className='social-logo'>
                SARVESH .
            </Link>
          </div>
          <div className='social-icons'>
            <a
              className='social-icon-link facebook'
              href='https://www.facebook.com/sarvesh.nagar.9'
              target='_blank'
              rel="noreferrer"
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </a>
            <a
              className='social-icon-link instagram'
              href='https://www.instagram.com/sarveshh__/'
              target='_blank'
              rel="noreferrer"
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>
            <a
              className='social-icon-link linkedin'
              href='https://www.linkedin.com/in/sarvesh-nagar/'
              target='_blank'
              rel="noreferrer"
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a>
            <a
              className='social-icon-link github'
              href='https://github.com/sarveshnagar'
              target='_blank'
              rel="noreferrer"
              aria-label='Github'
            >
              <i className='fab fa-github' />
            </a>
            <Popup
                trigger={<a className='social-icon-link spotifyFooter' style={{cursor: "pointer"}}> <i className="fab fa-spotify" /> </a>}
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;