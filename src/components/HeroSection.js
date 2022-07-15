import React from 'react'
import './HeroSection.css'
import '../App.css'
import { Link } from 'react-scroll';
import Typical from 'react-typical'

function HeroSection() {
    return (
        <div className='hero-container' id='home'>
            <h3>HEY! I AM</h3>
            <h1>Sarvesh Nagar</h1>
            <p> I'm a {' '}
                <Typical
                    loop = {Infinity}
                    wrapper="b"
                    steps={[
                        'Software Developer',
                        2500,
                        'Graphic Designer',
                        2500,
                        'Photographer',
                        2500
                    ]}
                />
            </p>
            <div className="mouse_scroll">
                <Link 
                    activeClass='active' 
                    spy={true} 
                    to='about' 
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    
                
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <div>
                    <span className="m_scroll_arrows unu"></span>
                    <span className="m_scroll_arrows doi"></span>
                    <span className="m_scroll_arrows trei"></span>
                </div>
            </Link>
            </div>
        </div>
    )
}

export default HeroSection