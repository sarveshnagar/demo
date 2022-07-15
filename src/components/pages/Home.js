import React from 'react'
import '../../App.css'
import AboutMe from '../AboutMe'
import Footer from '../Footer'
import HeroSection from '../HeroSection'
import Navbar from '../Navbar'
import Resume from '../Resume'
import './Home.css'

function Home() {
    return (
        <>
            <Navbar/>
            <HeroSection />
            <AboutMe />
            <Resume />
            <Footer />
        </>
    )
}

export default Home