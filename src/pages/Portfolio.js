import React, { useState } from 'react';
import Image1 from '../img/portfolio/1.png'
import Image2 from '../img/portfolio/2.png'
import Image3 from '../img/portfolio/3.png'
import Image4 from '../img/portfolio/4.png'
import Image5 from '../img/portfolio/6.png'
import Image6 from '../img/portfolio/5.png'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'

import { transition1 } from '../transitions';
import {motion as m} from'framer-motion'

const Portfolio = () => {

  const [index,setIndex]=useState(0)
  const images =[
    {id:1,img:Image1},
    {id:2,img:Image2},
    {id:3,img:Image3},
    {id:4,img:Image4},
    {id:5,img:Image5},
    {id:6,img:Image6},
    



]

const next=()=>{
 if(index === images.length-1){
  setIndex(0)
 }else{
  setIndex(index+1)
 }
}
const prev=()=>{
  if(index === 0){
   setIndex(images.length-1)
  }else{
   setIndex(index-1)
  }
 }

  return (
  
  <m.section className='section ' 
   
  initial={{opacity:0}}
  animate={{x:0,opacity:1}}
  exit={{opacity:0}}
  transition={transition1}
   >
  
  < div className='px-8  flex flex-col items-center gap-28 md:gap-10 md:pt-[8%] pt-[32%]'
 
  >
    <m.h1 className=' h1 border-b-gray-400 border-b-2 '   animate={{x:0}}
  initial={{x:-1000}}
  transition={{
    type:'spring',
    stiffness:40,
    delay:0.5}}>
      My Work
    </m.h1>

    <m.div className='relative border-black border-2 h-[30%] w-[110%] overflow-hidden md:hidden '
     animate={{x:0}}
     initial={{x:1000}}
     transition={{
       type:'spring',
       stiffness:40}}
    >

      <button className='absolute left-0 top-[40%] p-2 mx-2 text-3xl text-white bg-gray-800 bg-opacity-40' onClick={prev}> <AiOutlineArrowLeft/> </button>

      <img src={images[index].img} className='h-full w-full '></img>

      <button className='absolute right-0 top-[40%] text-3xl text-white bg-gray-800 bg-opacity-40 p-2 mx-2' onClick={next}> <AiOutlineArrowRight/> </button>
      
    </m.div>

    <div className='hidden md:grid    grid-cols-3 gap-4 pb-8 '>
      {images.map((img,i)=>(

       <div className=' max-w-[300px] h-[200px] overflow-hidden'>
        <m.img src={img.img}
        animate={{opacity:1}}
        initial={{opacity:0}}

        transition={{type:'spring' , stiffness:50, delay:i*0.3 + 2}}
        className='hover:scale-110 h-full  object-cover'
        />
        </div>
      ))}
    </div>

  </div>

  </m.section> 
  
  )
};

export default Portfolio;
