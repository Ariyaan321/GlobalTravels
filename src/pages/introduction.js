import React from 'react'
import "./introduction.css"
import cloudRight from '../assets/Cloudright.png'
import cloudLeft from '../assets/Cloudleft.png'
import plane from '../assets/plane1.png'
import { motion } from 'framer-motion'

const Introduction = () => {
    const text = "See the World, Live the Adventure"

    const textAnimation = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                // staggerChildren: 0, // for query test
                duration: 2,
                // duration: 4, // for query test 
            },
        },
    };

    const letterAnimation = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },

    };

    return (
        <div className='intro-bg'>
            <motion.img
                initial={{ translateX: -900 }}
                animate={{ translateX: 0 }}
                transition={{ duration: 5, delay: 0.5 }}
                // transition={{ duration: 3, delay: 2, ease: easeInOut }} // for query test
                src={cloudLeft}
                alt="cloudLeft" />

            <motion.img
                initial={{ translateX: 900 }}
                animate={{ translateX: 0 }}
                transition={{ duration: 5, delay: 0.5 }}
                // transition={{ duration: 3, delay: 2, ease: easeInOut }} // for query test
                src={cloudRight}
                alt="cloudRight" />

            <div className='intro-plane'>
                <motion.img
                    initial={{ translateX: -800, translateY: -685, scale: 9 }}
                    // initial={{ translateX: 0, translateY: 0 }}
                    animate={{ translateX: 0, translateY: 0, scale: 0 }}
                    transition={{ duration: 7, delay: 4 }}
                    // transition={{ duration: 5, delay: 4 }} // for query test
                    src={plane}
                    alt="planefly"
                    className='newimgintro'
                />
            </div>

            <div className='intro-text-placement'>
                <motion.div
                    className='intro-text'
                    variants={textAnimation}
                    initial="hidden"
                    animate="visible"
                >
                    {text.split(" ").map((word, i) => (
                        <span key={i}>
                            {word.split("").map((letter, j) => (
                                <motion.span
                                    className='intro-letters'
                                    variants={letterAnimation}
                                    key={j}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                            <span>&nbsp;</span>
                        </span>
                    ))}
                </motion.div>
            </div>
        </div >
    )
}

export default Introduction;