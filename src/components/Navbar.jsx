import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';
const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center m-auto">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-7 max-sm:justify-start max-sm:flex-1">
          <div>
            <img src={searchImg} alt="search" width={18} height={18} className="cursor-pointer 
               transition transform hover:scale-110    " />
          </div>
          {/* <div>
            <img src={bagImg} alt="bag" width={18} height={18} />
          </div> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
