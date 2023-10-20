import React , {useState} from 'react';

import {IoMdClose, ioMdClose} from 'react-icons/io'

import {CgMenuRight} from 'react-icons/cg'

import { Link } from 'react-router-dom';

import {motion} from 'framer-motion'



const menuVariants={
  hidden:{
    x:'100%'
  },show:{
    x:0,
    transition:{
      ease:[0.6,0.01,-0.05,0.9]
    }
  }
}
const MobileNav = () => {

  const [open,setOpen]=useState(false)
  return(
    <nav className='text-primary xl:hidden'>
      <div onClick={()=>setOpen(true)} className='text-3xl cursor-pointer '>
        <CgMenuRight/>
      </div>

      <motion.div 

      variants={menuVariants}
      animate={open ? 'show' : ''}
      initial='hidden'
      
      className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20 '>
      <div className='text-4xl absolute z-30 left-4 top-14 cursor-pointer' onClick={()=>setOpen(false)}>
       <IoMdClose />
      </div>
      <ul className='h-full flex flex-col justify-center items-center gap-8 text-primary font-primary font-bold text-3xl'>
        
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/portfolio'}>Portfolio</Link>
          
        
      </ul>
      </motion.div>
    </nav>
  )
};

export default MobileNav;
