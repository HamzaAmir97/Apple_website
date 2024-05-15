import { appleImg, searchImg, bagImg } from '../utils';
// import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className=' w-full py-5 sm:px-10 px-5 flex justify-between items-center '>
        <nav  className=' flex w-full  screen-max-width '>
           
            <img src={appleImg} alt='apple' width={15} height={15} className='w-10 h-10' />
        
        <div className='flex flex-1 justify-center  max-sm:hidden'>
          {["iphone", "ipad", "mac", "watch", "tv", "music"].map((item)=>(
            <div className=' px-5 py-2.5 text-sm cursor-pointer text-gray hover:text-white transition-all  ' key={item.id} >
             {item}</div>
          ))}


        </div>
        
              
<div className='flex items-baseline gap-7 max-sm:justify-end max-sm:w-flex-1'>
  <img src={searchImg} alt='search' width={15} height={15 } className='w-8   h-8' />
  <img src={bagImg} alt='bag' width={15} height={15} className='w-10 h-10' />


</div>

        </nav>
    </header>
  )
}

export default Navbar;
