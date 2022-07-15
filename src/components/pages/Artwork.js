import React from 'react'
import ArtworkNav from '../ArtworkNav'
import './Artwork.css'

function Artwork() {
    return (
        <div>
            <ArtworkNav></ArtworkNav>
            <div className="container">
                <div className="heading">
                    {/* <h3>Photo <span>Gallery</span></h3> */}
                </div>
                <div className="box">
                
                    <div className="dream">
                        <img src="/artwork/3.jpg"/>
                        <img style={{marginTop:"2rem"}} src="/artwork/2.jpg" alt='image1'/>
                        <img style={{marginTop:"2rem"}} src="/artwork/8.jpg" alt='image2'/>
                        <img style={{marginTop:"2rem"}} src="/artwork/10.jpg" alt='image3'/>
                    </div>

                    <div className="dream">
                        <img src="/artwork/1.jpg"/>
                        <img style={{marginTop:"2rem"}} src="/artwork/5.jpg" alt='image4'/>
                        <img style={{marginTop:"2rem"}} src="/artwork/6.jpg" alt='image5'/>
                        <img style={{marginTop:"2rem"}} src="/artwork/11.jpg" alt='image6'/>
                        <img style={{marginTop:"2rem"}} src="/artwork/12.jpg" alt='image6'/>
                    </div>

                    <div className="dream">
                        <img src="/artwork/7.jpg"/>
                        <img style={{marginTop:"2rem"}} src="/artwork/4.jpg" alt='image7'/>
                        <img style={{marginTop:"2rem"}} src="/artwork/9.jpg" alt='image8'/>
                        <img style={{marginTop:"2rem"}} src="/artwork/13.jpg" alt='image8'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Artwork