import React from 'react';
import './AboutMe.css';
import AboutMeImage from './AboutMeImage'

function AboutMe() {
  return (
    <div className='about-me-container' id='about'>
      <div className='about-me-links'>
        <div className='about-me-link-wrapper'>
            <div className='about-me-link-items'>
                <AboutMeImage/>
            </div>
            <div className='about-me-link-items'>
                <h1>About Me</h1>
                <p>I am an Application Developer at Oracle, soaking up as much
                     knowledge and practice as I can in an attempt to perfect my craft.
                I have a good knowledge of Data Structures and Algorithms and love problem solving.
                </p>
                <div className='about-me-link-wrapper'>
                    <table>
                        <tbody>
                            <tr>
                                <th className='table-heading'>Name:</th>
                                <td className='table-matter'>Sarvesh Nagar</td>
                            </tr>
                            <tr>
                                <th className='table-heading'>Date of Birth:</th>
                                <td className='table-matter'>November 08, 1996</td>
                            </tr>
                            <tr>
                                <th className='table-heading'>Address:</th>
                                <td className='table-matter'>Indore (M.P.) India</td>
                            </tr>
                            <tr>
                                <th className='table-heading'>Zip code:</th>
                                <td className='table-matter'>452005</td>
                            </tr>
                            <tr>
                                <th className='table-heading'>Email:</th>
                                <td className='table-matter'>sarveshnagar08@gmail.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default AboutMe;