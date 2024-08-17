import React, { useEffect, useState } from 'react'
import './landingPage.css'
import swissHouse from "../assets/swiss169.jpg"
import japan from "../assets/japanO169.jpg"
import paris from "../assets/parisC2.jpeg"
import santorini from "../assets/san169flip.jpg"
import MyImage from './MyImage'

const LandingPage = () => {
    const [changeBgCounter, setChangeBgCounter] = useState(0);
    const bgGallery = [santorini, japan, paris, swissHouse]
    // 4928 x 3280
    // 1456 x 816

    useEffect(() => {
        const interval = setInterval(() => {
            setChangeBgCounter((prevCounter) => (prevCounter + 1) % bgGallery.length);
        }, 6000);

        return () => clearInterval(interval); // Clear the interval when the component unmounts
    }, [bgGallery.length]);

    return (
        <>
            <div className='images'>
                <MyImage image={bgGallery[changeBgCounter]} className='images' />
            </div>
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