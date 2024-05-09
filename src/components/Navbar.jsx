import React from 'react'
import appleImg from '../utils';
import searchImg from '../utils';
import bagtImg from '../utils';
const Navbar = () => {
  return (
    <header  className=' w-full py-5 sm:py-10 px-5 flex justify-between items-center '>
        <nav >
           
            <img src={appleImg} alt='apple' width={18} height={30} className='w-10 h-10' />
        
        <div >
          {['phones','Mackbooks','Tablets','Watchs'].map((item,index)=>(
            <div key={item} >
              <nav>{item}</nav>S
            </div>
          ))}


        </div>
        

<div>
  <img src={searchImg} alt='search' width={18} height={30} className='w-10 h-10' />
  <img src={bagtImg} alt='bag' width={18} height={30} className='w-10 h-10' />


</div>

        </nav>
    </header>
  )
}

export default Navbar;
