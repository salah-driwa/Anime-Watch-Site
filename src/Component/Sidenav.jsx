import { useState } from 'react';
import { BsCollectionFill, BsDot } from 'react-icons/bs';
import { FaHome, FaFire, FaCalendar, FaListAlt, FaHistory, FaSave, FaCog, FaSignOutAlt, FaCloudDownloadAlt, FaBroadcastTower, FaAngleDown } from 'react-icons/fa';
import { RiAccountCircleFill } from 'react-icons/ri';

// eslint-disable-next-line react/prop-types
const Sidebar = ({toggle}) => {
  const [selected, setSelected] = useState('Home'); // Default to 'Home'

  const menuItems = [
    { name: 'Home', icon: <FaHome /> },
    { name: 'Trending', icon: <FaFire /> },
    { name: 'Schedule', icon: <FaCalendar /> },
    { name: 'Categories', icon: <FaListAlt /> },
    { name: 'History', icon: <FaHistory /> },
    { name: 'Saved', icon: <FaSave /> },
    { name: 'Collections', icon: <BsCollectionFill />
    },
    { name: 'Download', icon: <FaCloudDownloadAlt  /> },


    { name: 'Settings', icon: <FaCog /> },
    { name: 'Your Account', icon: <RiAccountCircleFill  /> },
    { name: 'Log Out', icon: <FaSignOutAlt /> },

  ];

  const Following =[
    {
        img:"https://cdn.myanimelist.net/s/common/company_logos/e68488ab-f0a0-411f-850a-18fb3e21b96c_600x600_i?s=21618c9c3183ffded748d303a253b637",studioName:'Mad House'
  , state:"live" }
    ,   {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7J5PQQMyGie2fKT-ArdE5VbtZQ3iBveforQ&s",studioName:'Mappa'
        , state:"online"   }
    ,   {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrQ4jE1j2nQEIRRqWh7S86UfVUblL50tE7g&s",studioName:'Wit Studio'
        , state:"offline"  }
    ,
  ]
  const handleClick = (name) => {
    setSelected(name);
  };

  return (
    <div className="bg-bg w-64  min-w-64 flex flex-col justify-between p-4">
        <div className='flex flex-col  '>
      <div>
        <ul className="">
          {menuItems.slice(0, 4).map((item) => (
            <li
              key={item.name}
              className={`cursor-pointer flex items-center p-2  ${
                selected === item.name
                  ? 'text-primary border-r-2  border-primary '
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => {
                toggle(); 
handleClick(item.name);
              }}
            >
              <span className="mr-2">{item.icon}</span> {item.name}
            </li>
          ))}
        </ul>
      </div>

      <div className=' border-t border-opacity-15  border-white'>
        <ul className="">
          {menuItems.slice(4, 8).map((item) => (
            <li
              key={item.name}
        
              className={`cursor-pointer flex items-center p-2  ${
                selected === item.name
                  ? 'text-primary border-r-2  border-primary '
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => {
                toggle(); 
handleClick(item.name);
              }}
            >
              <span className="mr-2">{item.icon}</span> {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className=' border-t border-opacity-15  border-white'>
        <ul className="">
          {menuItems.slice(8, 10).map((item) => (
            <li
              key={item.name}
              className={`cursor-pointer flex items-center p-2  ${
                selected === item.name
                  ? 'text-primary border-r-2  border-primary '
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => handleClick(item.name)}
            >
              <span className="mr-2">{item.icon}</span> {item.name}
            </li>
          ))}
        </ul>
      </div>

  
 <div className=" mt-1 border-t  border-opacity-15  border-white">
        <h2 className="text-gray-400  mt-3 mb-2">Following</h2>
        <ul className="space-y-4">
          {Following.map((studio) => (
            <li key={studio.studioName} className="flex items-center text-gray-400">
              <img src={studio.img} alt={studio.studioName} className="w-8 h-8 rounded-full mr-2" />
              <span className="flex-1">{studio.studioName}</span>
              {studio.state === 'live' && <FaBroadcastTower className="text-red-500" />}
              {studio.state === 'online' && <BsDot className="text-green-500 text-2xl" />}
            </li>
          ))}
        </ul>
        <div className=' text-gray-400 flex  gap-2  mt-3 items-center'>
            <FaAngleDown size={30}  />
        more
        </div>

      </div>
     





      </div>
      <div>
        <ul className="space-y-4">
          {menuItems.slice(10).map((item) => (
            <li
              key={item.name}
              className={`cursor-pointer flex items-center p-2 rounded ${
                selected === item.name
                  ? 'text-primary border-l-4 border-primary bg-secondary'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => handleClick(item.name)}
            >
              <span className="mr-2">{item.icon}</span> {item.name}
            </li>
          ))}
        </ul>
        <span className=' text-sm text-gray-400'>@2023 WAnime</span>
      </div>
      
    </div>
  );
};

export default Sidebar;
