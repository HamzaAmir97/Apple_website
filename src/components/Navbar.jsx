import { appleImg, searchImg, bagImg } from '../utils';
// import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className=' w-full py-5 sm:px-10 px-5 flex justify-between items-center '>
        <nav  className=' flex w-full  screen-max-width '>
           
            <img src={appleImg} alt='apple' width={15} height={15} className='w-10 h-10' />
        
        <div className='flex flex-1 justify-center  max-sm:hidden'>
          {["iphone", "ipad", "mac", "watch", "tv", "music"].map((item)=>(
            <div className=' px-5 text-sm cursor-pointer text-gray hover:text-white transition-all' key={item.id} >
             {item}</div>
          ))}


        </div>
        

<div className=' flex items-baseline
   max-sm:justify-end max-sm:flex-1 gap-10'>
  <img src={searchImg} alt='search' width={10} height={10 } className='w-10  h-10 mx-2' />
  <img src={bagImg} alt='bag' width={10} height={10} className='w-10 h-10 mx-2' />


</div>

        </nav>
    </header>
  )
}

export default Navbar;
