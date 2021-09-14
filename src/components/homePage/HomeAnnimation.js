import React, { useState, useEffect } from "react"
import {motion} from 'framer-motion'

const HomeAnnimation = () => {
   
    // const letters = [
    //     {
    //       id: 0,
    //       results: [
    //         "Vanilla",
    //         "React js",
    //         "Node js",
    //         "Express js",
    //         "Jquery",
            
    //       ],
    //     },
    //     {
    //       id: 1,
    //       results: [
    //         "Principle Photography",
    //       ],
    //     },
    //     {
    //       id: 2,
    //       results: [
    //         "Colour correction",
    //         "Offline editing",
    //         "Online editing",
    //         "VFX",
    //         "Animation and motion graphics",
    //         "Closed captioning and subtitles",
    //         "Descriptive video",
    //         "Dailies",
    //         "Quality control",
    //         "LTO Archiving",
    //       ],
    //     },
    //   ]
      

    const banner = {
        animate: {
          transition: {
            delayChildren: 0.4,
            staggerChildren: 0.1,
          },
        },
      };

    const letterAni = {
        initial: { y: 400 },
        animate: {
          y: 0,
          transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
          },
        },
      };

    return (
    <motion.div className='banner' variants={banner}>
      
    </motion.div>
    )
  }
  
  export default HomeAnnimation