import React from 'react'
import  {gsap} from 'gsap'
import { useGSAP } from '@gsap/react'


export const Hero = () => {
  
 useGSAP(()=>{

  gsap.To('#hero',{
    opacity:1,
    y:100,}
    
    
    ,[])
  })
  
  return (


    <section className='w-full h-screen nav-height bg-black
      relative'>
    <div className='h-5/6 w-full flex-center flex-col '>
    
    
   <p className='hero-title text-2xl font-bold'>
    iphone 15 pro
   </p>
   
    </div>   
    </section>
  )
}

export default Hero;
