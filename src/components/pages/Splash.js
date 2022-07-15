import React from 'react'
import '../../App.css'
import './Splash.css'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import { css } from '@emotion/react'

function Splash() {
    
    const color = '#fff'
    const size = 10
    return (
        <>
            <div className='splash' id='splash overflow'>
                <h1 className='logo'>SARVESH .</h1>
                <ClimbingBoxLoader className='abcd' style={{overflow: "hidden"}} loading={true} color={color}
                 css={css``} size={size} />
            </div>
        </>
    )
}

export default Splash
