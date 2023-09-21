import React from 'react';
import Socials from './Socials';
import Logo from '../img/header/logo.svg'
import MobileNav from './MobileNav'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'


const Header = () => {
  return (
    <motion.header
    animate={{y:0}}
    initial={{y:-1000}}
    transition={{
      type:'spring',
      stiffness:40,
      delay:1
    }}
    className=' absolute w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        <Link to={'/'} className='max-w-[200px]'>
        <img src={Logo}></img>
        </Link>
        <nav className=' hidden lg:flex gap-12 font-semibold'>
          <Link to={'/'} className='text-gray-500 hover:text-primary transition '>Home</Link>

          <Link to={'/about'} className='text-gray-500 hover:text-primary transition '>About</Link>

          <Link to={'/portfolio'} className='text-gray-500 hover:text-primary transition '>Portfolio</Link>

          
        </nav>

        
      </div>
      <Socials/>
      <MobileNav/>

    </motion.header>
  )
  
  ;
};

export default Header;
