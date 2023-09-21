import React from 'react';

import WomanImg from '../img/about/woman.png'
import {motion as m} from 'framer-motion'
import { Link } from 'react-router-dom';
import { transition1 } from '../transitions';
const About = () => {

  return <m.section
  
  
  initial={{opacity:0}}
  animate={{x:0,opacity:1}}
  exit={{opacity:0}}
  transition={transition1}
  
  className='section '>
<div className='container mx-auto h-full relative'>
  <div className=' flex flex-col lg:flex-row h-full items-center md:justify-center gap-24 text-center lg:text-left lg:pt-16'>
    <m.div 
    animate={{x:0}}
    initial={{x:-1000}}
    transition={{
      type:'spring',
      stiffness:40
    }}
    className='flex-1 max-h-[500px] md:max-h-[500px] order-2 lg:order-none  bottom-[260px] opacity-90 md:opacity-100  relative md:bottom-28 md:left-8  w-[500px]   md:h-screen '>
    <img src={WomanImg}></img>
    </m.div>
    <m.div 
     animate={{x:0}}
     initial={{x:1000}}
     transition={{
       type:'spring',
       stiffness:40,
       delay:0.5
     }}
    className='flex-1 pt-36 pb-14 lg:pt-0 md:w-auto z-10 flex flex-col justify-center items-center px-10 md:px-0'>
    <h1 className='h1 border-b-2 border-gray-400 '>About me</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quas voluptatum eum laboriosam consequatur veritatis! Quasi, magnam. Dolor minus alias in officia aut debitis, nostrum qui quas, ipsam, error blanditiis.</p>
   <Link className='btn p-8 m-8' to={'/portfolio'}>
    
    View my porfolio
   </Link>

    </m.div>
  </div>
</div>
  </m.section>;
};

export default About;
