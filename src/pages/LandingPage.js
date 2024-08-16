import React, { useEffect, useState } from 'react'
import './landingPage.css'
import landingbg from "../assets/landing3.jpeg"
import LandingBeach from "../assets/landingBeach.jpg"
import CloudLeft from "../assets/Cloudleft.png"
import motion from 'framer-motion'

const LandingPage = () => {
    const [changeBgCounter, setChangeBgCounter] = useState(0);
    const bgGallery = [LandingBeach, CloudLeft]

    // useEffect(() => {
    //     setTimeout(() => {
    //         if ((changeBgCounter + 1) >= 2) {
    //             setChangeBgCounter(0)
    //             return changeBgCounter
    //         }
    //         else {
    //             setChangeBgCounter(changeBgCounter + 1)
    //             return changeBgCounter
    //         }
    //     }, 5000)

    // }, [changeBgCounter])

    return (
        <>
            {/* <div className='bg-image'>
                <img src={bgGallery[changeBgCounter]} alt="beach" />
            </div> */}
            <div className='hero-text'>
                <h1>Journey Beyond The Ordinary</h1>
                <p>
                    Explore breathtaking destinations, create unforgettable memories, and experience the world like never before.
                </p>
            </div>
        </>
    )
}

export default LandingPage