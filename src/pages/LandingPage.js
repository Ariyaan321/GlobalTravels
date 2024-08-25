import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/navbar'
import './landingPage.css'
import swissHouse from "../assets/italy169.jpg"
import japan from "../assets/japanO169.jpg"
import paris from "../assets/parisC2.jpeg"
import santorini from "../assets/san169flip.jpg"
import MyImage from './MyImage'
import { motion, easeInOut } from "framer-motion"

const LandingPage = () => {
    const [changeBgCounter, setChangeBgCounter] = useState(0);
    const [changeCountryCounter, setChangeCountryCounter] = useState(0);
    const [opacityIsActive, setOpacityIsActive] = useState(true)
    const bgGallery = [santorini, japan, paris, swissHouse]
    const countryLocations = [
        {
            cname: "Greece",
            city: "Santorini"
        },
        {
            cname: "Japan",
            city: "Honshu"
        },
        {
            cname: "France",
            city: "Paris"
        },
        {
            cname: "Italy", // italy
            city: "Stelvio"
        },
    ]
    // 4928 x 3280
    // 1456 x 816

    useEffect(() => {
        const interval = setInterval(() => {
            setOpacityIsActive(false); // Start fading out
            setTimeout(() => {
                setChangeBgCounter((prevCounter) => (prevCounter + 1) % bgGallery.length);
                setChangeCountryCounter((prevCounter) => (prevCounter + 1) % countryLocations.length);
                setOpacityIsActive(true); // Fade in the next image
            }, 2000); // Wait for the fade-out to complete before changing the image
        }, 15000); // 5s visible, 2s fade

        return () => clearInterval(interval); // Clear the interval when the component unmounts
    });

    return (
        <>
            <Navbar />

            {/* <div className='newimage'></div> */}
            <motion.div
                className='images-pos'
                animate={{ opacity: opacityIsActive ? 1 : 0 }}
                transition={{ duration: 1, ease: easeInOut }}
            >
                <MyImage image={bgGallery[changeBgCounter]} />
            </motion.div>
            <div className='hero-text'>
                <h1>Journey Beyond The <div className='earth'>🌏</div>rdinary</h1>
                <p>
                    Explore breathtaking destinations, create unforgettable memories, and experience the world like never before with GlobalTravels.
                </p>
                <button className='button'><a href="/">Book Now</a></button>
            </div>
            <div className='countries'>
                {countryLocations[changeCountryCounter].city + ', ' + countryLocations[changeCountryCounter].cname}
            </div>
        </>
    )
}

export default LandingPage