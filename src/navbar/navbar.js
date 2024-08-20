import React from 'react'
import "./navbar.css"
import LandingBeach from "../assets/landingBeach.jpg"

const navbar = () => {
    return (
        <>
            <div className='container'>
                <img src={LandingBeach} alt="imgs" />
                <ul>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Services</a>
                    <a href="">Contact Us</a>
                    {/* <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact Us</li> */}
                </ul>
            </div>
        </>
    )
}

export default navbar