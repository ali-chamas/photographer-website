import React from 'react';

import WomanImg from '../img/home/woman.png'
import {Link} from 'react-router-dom'


import {motion} from 'framer-motion'

import {transition1} from '../transitions'


const Home = () => {
  return (
  <motion.section
  initial={{opacity:0}}
  animate={{x:0,opacity:1}}
  exit={{opacity:0}}
  transition={transition1}
  className=' section '>
    <div className='container mx-auto '>

   
    <div className='flex flex-col justify-center   '>

      <motion.div
      
      animate={{x:0}}
    initial={{x:-1000}}
    transition={{
      type:'spring',
      stiffness:40,
      delay:0.5
    }}
      className='w-full pt-40  md:pt-12 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start '>

          <h1 className='h1'>
          Photographer <br/> & film maker
          </h1>

          <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>Los Angelos , Usa</p>
          <Link to={'about'} className='btn mb-[30px] hover:bg-white hover:text-black border border-black transition-all duration-500'>hire me</Link>
      


    </motion.div>

<div className='flex justify-end '>


    <motion.div 
    animate={{x:0}}
    initial={{x:1000}}
    transition={{
      type:'spring',
      stiffness:40
    }}
    
    className='relative  bottom-28  md:bottom-0   md:-right-40 lg:overflow-hidden w-[500px] md:w-auto  opacity-90 md:opacity-100 md:h-screen   md:pr-[0] h-[300px]'>
      <img src={WomanImg}></img>
      </motion.div>


    </div>

    </div>
    </div>
  </motion.section>
  )
};

export default Home;
