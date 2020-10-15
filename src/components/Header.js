import React from 'react'
import './Header.css'
import img from '../assets/_GEO0094-38.png'
import img2 from '../assets/_GEO0050-21.png'
import img3 from '../assets/_GEO0083-36.png'
import Typography from '@material-ui/core/Typography'
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
  
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        duration :2
      }
    },
    exit:{
      x:"-100vw",
      transition:{ease: "easeInOut"}
    }
  }


function Header() {
    return (
        <motion.div className='header'
            variants={containerVariants}
            initial= "hidden"
            animate ="visible"
            exit = "exit">
            
            <section className='header__left'>
            <Typography variant='h1'>
                <motion.h1
                variants={glowVariants}
                initial= "hidden"
                animate ="visible"
                exit = "exit">Based</motion.h1>
            </Typography>
                <p>common items, premium desires in order to execute premium  </p>
            </section>
            

            

            <section className='header__right'>
                <div className= 'header__right__img'>
                    <motion.img initial={{ scale: 0 }}
                                animate={{ rotate: 360, scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 6
                                                }} 
                                src={img}></motion.img>
                    <img src={img2}></img>
                    <img src={img3}></img>
                </div>
            </section>
        </motion.div>
    )
}

export default Header
