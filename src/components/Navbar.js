import React from 'react'
import './Navbar.css'
import { motion } from 'framer-motion';


const glowVariants = {

    hover: {
      scale :1.5, 
      textShadow : "0px 0px 8px rgb(0,0,0",
      boxShadow : "0px 0px 8px rgb(0,0,0)" ,
      transition: {
        duration:0.5,
        yoyo:Infinity
      }
    }
  }

const containerVariants = {
    hidden: { 
      opacity:0,
      x: '50vw'
    },
    visible: {
      opacity: 1,
      x:0, 
      transition:{
        type : "spring" , 
        mass:1,
        damping: 10,
        when:"beforeChildren",
        staggerChildren:0.9
      }
    },
    exit:{
      x:"-100vw",
      transition:{ease: "easeInOut"}
    }
  }

  const childVariants = {
    hidden: {
      opacity:0
    },
    visible: {
      opacity:1,
      delay:1000
    }
  }

function Navbar() {
    return (
        <div className='navbar'>
            <motion.h2 
            variants={glowVariants} 
            initial="hidden"
            animate="visible"
            exit="exit"
            className='navbar__left'>based</motion.h2>
            <motion.div 
                    variants = {containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"className="navbar__right">
                <ul>
                    <li>Works</li>
                    <motion.li variants={childVariants}>About</motion.li>
                    <li>Contact</li>
                    <li>Other</li>
                </ul>

            </motion.div>
            
        </div>
    )
}

export default Navbar
