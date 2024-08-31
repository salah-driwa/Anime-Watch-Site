import { FaSearch, FaBell, FaMicrophone } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoTime } from 'react-icons/io5';
import { MdNightlightRound } from 'react-icons/md';

// eslint-disable-next-line react/prop-types
const Navbar = ({toggle}) => {
  return (
    <nav className="bg-bg border-b mt-2 border-white border-opacity-20  h-fit  p-4 flex justify-between items-center">
        <div className=' flex items-center gap-3'>
        <GiHamburgerMenu size={35} className=' hover:text-primary cursor-pointer p-1' />

      <div className="text-white text-xl  font-bold cursor-pointer" onClick={()=>toggle()}><span className=' text-primary'>W A</span>nime</div>
      </div>
      <div className=' flex items-center gap-3'>
      <div className= " flex items-center bg-[#323847]  border-opacity-15 border-white  pr-1 border rounded-full ">
        <input
          type="text"
          className=" text-white p-2 pl-10 bg-[#323847] rounded-full focus:outline-none"
          placeholder="Search..."
        />
        <FaSearch  size={35} className="   bg-primary text-white  p-2 rounded-full " />
      </div>
      <FaMicrophone size={40} className=' bg-[#323847] p-3 rounded-full' />
      </div>
      <div className=' flex items-center'>
      <div className="flex items-center  space-x-4 text-white  pr-4  border-r border-opacity-10 border-white">
        <FaBell className="hover:text-white cursor-pointer" />
  
        <IoTime className="hover:text-white cursor-pointer" />
        <MdNightlightRound  className="hover:text-white cursor-pointer" />
 
      </div>
      <img src="https://i.pravatar.cc/300"  className=' size-8 mr-3  ml-2 rounded-full 'alt="img" />
      </div>
    </nav>
  );
};

export default Navbar;
