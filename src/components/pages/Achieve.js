import React from 'react'
import AchieveNav from '../AchieveNav'
import './Artwork.css'

function Achieve() {
    return (
        <div>
            <AchieveNav />
            <div className="container">
                <div className="heading">
                    {/* <h3>Photo <span>Gallery</span></h3> */}
                </div>
                <div className="box">

                    <div className="dream">
                        <img style={{ marginTop: "2rem" }} src="/artwork/c1.jpg" />
                        {/* <img style={{ marginTop: "2rem" }} src="/artwork/8.jpg" />
                        <img style={{ marginTop: "2rem" }} src="/artwork/10.jpg" /> */}
                    </div>

                    <div className="dream">
                        <img style={{ marginTop: "2rem" }} src="/artwork/c3.jpg" />
                        {/* <img style={{ marginTop: "2rem" }} src="/artwork/6.jpg" />
                        <img style={{ marginTop: "2rem" }} src="/artwork/11.jpg" /> */}
                    </div>

                    <div className="dream">
                        <img style={{ marginTop: "2rem" }} src="/artwork/c2.jpg" />
                        {/* <img style={{ marginTop: "2rem" }} src="/artwork/9.jpg" /> */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Achieve