/* eslint-disable react/prop-types */

import { motion } from 'framer-motion';
import { AiFillSound, AiOutlineBook, AiOutlineDownload, AiOutlineLike } from 'react-icons/ai';
import { CiStreamOn } from 'react-icons/ci';
import { FaBackward, FaClock, FaExpandArrowsAlt, FaForward, FaPlay, FaUsers } from 'react-icons/fa';
import { IoIosSettings } from 'react-icons/io';
import { IoPlayForward } from 'react-icons/io5';
import { MdClosedCaption } from 'react-icons/md';
import  { useEffect, useState } from 'react';
import { FiCheckSquare, FiSquare, FiSun } from 'react-icons/fi';



const VideoPlayer = ({ image, title, live, viewers, duration ,currentTime}) => (
  <motion.div 
  initial={{ opacity: 0,x:10 }}
  animate={{ opacity: 1,x:0 }}
  className=' flex flex-col '>
  <div className="relative rounded-2xl ">
    <img src={image} alt={title} className="w-full    object-cover rounded-lg" />
    <div className="absolute top-4  right-24 bg-gray-500 rounded-full  text-white  px-2 py-1 text-sm flex  items-center gap-2"><FaUsers /> {viewers}
    </div>
    {live && <div className="absolute top-4 right-4 bg-red-500 text-white rounded-full px-2 py-1 text-sm flex   gap-2 items-center "> <CiStreamOn />
      Live</div>}



   
      <div className="absolute bottom-0 left-0 w-full bg-gray-700 bg-opacity-60  rounded-lg  ">
      <div className="flex-1 z-50 mb-2 w-full">
  <div className="relative h-1 bg-gray-500 rounded-full">
    <div
      className="absolute top-0 h-full bg-orange-400 rounded-full"
      style={{ width: `${(currentTime / duration) * 100}%` }}
    >
      {/* The dot */}
      <div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-orange-400 rounded-full border border-white"
        style={{ marginRight: '-6px' }} // Adjust to ensure it's aligned with the progress
      ></div>
    </div>
    <div></div>
  </div>
</div>
      <div className=' flex items-center my-3 mx-4 '>
      <div className="flex items-center space-x-4 border-e pr-6">
        <div className="text-white"><FaPlay /> 
        </div>
        <div className="text-white"><IoPlayForward />
        </div>
        <div className="text-white"><FaClock />
        </div>
        
        <div className="text-white"><AiFillSound />
        </div>
      </div>
      
      <div className=' flex w-full justify-between items-center'> 
      <div className="text-white text-sm pl-3">
        {`${currentTime.toFixed(2)} / ${duration.toFixed(2)}`}
    
      </div>
      <div className="flex items-center space-x-2">
        <div className="text-white"><MdClosedCaption />
        </div>
        <div className="text-white"><IoIosSettings />
        </div>
        <div className="text-white"><FaExpandArrowsAlt />
        </div>
      </div>


      </div>
      </div>
     
    


    
    </div>
  </div>
  <div className=' flex'>

<ControlPanel/>
  </div>

  </motion.div>
);

const ControlPanel = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [autoNext, setAutoNext] = useState(true);
  const [light, setLight] = useState(false);

  return (
    <div className="flex items-center space-x-4 w-full mt-2 bg-gray-800 text-gray-300 p-2 rounded-lg">
      
      {/* Auto Play */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1, rotate: 3, transition: { type: "spring", stiffness: 300, damping: 10 }}}
        className="flex items-center space-x-1 hover:bg-gray-600 hover:bg-opacity-10 p-3 rounded-lg cursor-pointer"
        onClick={() => setAutoPlay(!autoPlay)}
      >
        <span>
          {autoPlay ? <FiCheckSquare className="text-blue-500" /> : <FiSquare />}
        </span>
        <span>Auto Play</span>
      </motion.div>
      
      {/* Auto Next */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.1, rotate: 3, transition: { type: "spring", stiffness: 300, damping: 10 }}}
        className="flex items-center space-x-1 hover:bg-gray-600 hover:bg-opacity-20 p-3 rounded-lg cursor-pointer"
        onClick={() => setAutoNext(!autoNext)}
      >
        <span>
          {autoNext ? <FiCheckSquare className="text-blue-500" /> : <FiSquare />}
        </span>
        <span>Auto Next</span>
      </motion.div>
      
      {/* Light Mode */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.1, rotate: 3, transition: { type: "spring", stiffness: 300, damping: 10 }}}
        className="flex items-center space-x-1"
        onClick={() => setLight(!light)}
      >
        <FiSun className={light ? "text-yellow-500" : ""} />
        <span>Light</span>
      </motion.div>

      {/* Prev & Next Buttons */}
      <div
     
        className="flex items-center space-x-2"
      >
        <motion.button 
         initial={{ opacity: 0, x: 10 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ delay: 0.1}}
         whileHover={{ scale: 1.1,  transition: { type: "spring", stiffness: 1000, damping: 5 }}}
         className="flex items-center space-x-1 text-white hover:text-blue-400">
          <FaBackward />
          <span>Prev</span>
        </motion.button>
        
        <motion.button
           initial={{ opacity: 0, x: 10 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.4 }}
           whileHover={{ scale: 1.1,  transition: { type: "spring", stiffness: 1000, damping: 5 }}} className="flex items-center space-x-1 text-white hover:text-blue-400">

          <span>Next</span>
          <FaForward />
        </motion.button>
      </div>
    </div>
  );
};

const EpisodeList = ({ episodes }) => {
  const [eLoading, setELoading] = useState(true);

  // Simulate loading and switch eLoading state after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setELoading(false); // After 1 second, set eLoading to false
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className="flex flex-col space-y-2 scroll-x-hidden w-96">
      {/* Season Buttons */}
      <div className="flex gap-5 overflow-x-scroll pb-3">
        <div className="rounded-full text-nowrap bg-opacity-20 p-1 px-2 bg-gray-500 w-40">Season 1</div>
        <div className="rounded-full text-nowrap p-1 px-2 bg-orange-500 w-40">Season 2</div>
        <div className="rounded-full text-nowrap bg-opacity-20 p-1 px-2 bg-gray-500 w-40">Movie 1</div>
        <div className="rounded-full text-nowrap bg-opacity-20 p-1 px-2 bg-gray-500 w-40">Movie 2</div>
        <div className="rounded-full text-nowrap bg-opacity-20 p-1 px-2 bg-gray-500 w-40">Season 1</div>
        <div className="rounded-full text-nowrap bg-opacity-20 p-1 px-2 bg-gray-500 w-40">Season 2</div>
        <div className="rounded-full text-nowrap bg-opacity-20 p-1 px-2 bg-gray-500 w-40">Movie 1</div>
        <div className="rounded-full text-nowrap bg-opacity-20 p-1 px-2 bg-gray-500 w-40">Movie 2</div>
      </div>

      <h1 className="text-xl flex justify-between w-full">
        Episode List <span className="text-sm text-white text-opacity-50">See More</span>
      </h1>

      {/* Episode List with Skeleton Loader */}
      <div className="flex flex-col  overflow-x-hidden gap-2 overflow-y-scroll h-96">
        {eLoading ? (
          // Skeleton Loader (showing shimmer effect while loading)
          Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex space-x-4 items-center w-full p-2 rounded animate-pulse">
              <div className="w-28 h-16 bg-gray-400 rounded" /> {/* Skeleton Image */}
              <div className="flex flex-col space-y-2">
                <div className="w-40 h-4 bg-gray-400 rounded" /> {/* Skeleton Title */}
                <div className="w-24 h-4 bg-gray-400 rounded" /> {/* Skeleton Date */}
              </div>
            </div>
          ))
        ) : (
          // Actual Episodes
          episodes.map((episode, index) => (
            <motion.div
              key={episode.id}
              className={`flex space-x-4 items-center w-full p-2 rounded ${episode.isActive ? 'bg-gray-700' : ''}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }} // Staggered reveal animation
              whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 300, damping: 10 } }} // Scale hover effect
            >
              <img
                src={episode.image}
                alt={episode.title}
                className="w-28 h-16 object-cover rounded"
              />
              <div className="text-white">
                <p>{episode.title}</p>
                <p className="text-sm text-gray-400">{episode.date}</p>
              </div>
              {episode.isActive && (
                <div className="ml-auto flex text-red-500">
                  <span><CiStreamOn /></span>
                </div>
              )}
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};


const AnimeInfo = ({ title, studio, tags, synopsis, score }) => {
  const [eLoading, setELoading] = useState(true);

  // Simulate loading and switch eLoading state after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setELoading(false); // After 1 second, set eLoading to false
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  // Animation variants for fade-in effect
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  return (
    <div className="w-full bg-gray-900 rounded-lg flex">
      {/* Anime Image */}
      {eLoading ? (
        <div className="w-60 h-96 bg-gray-400 animate-pulse rounded-2xl" />
      ) : (
        <motion.img
          src="https://i.ebayimg.com/images/g/jwoAAOSwnlxkF-s1/s-l1200.jpg"
          className="w-60 rounded-2xl"
          alt="Anime Image"
          variants={fadeIn}  // Apply fade-in animation
          initial="hidden"
          animate="visible"
        />
      )}

      <div className="flex flex-col">
        {/* Tags Section */}
        {eLoading ? (
          <div className="mt-6 mb-5 flex space-x-2 animate-pulse">
            <div className="w-20 h-6 bg-gray-400 rounded-full" />
            <div className="w-20 h-6 bg-gray-400 rounded-full" />
            <div className="w-20 h-6 bg-gray-400 rounded-full" />
          </div>
        ) : (
          <motion.div
            className="flex space-x-2 mt-6 mb-5"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            {tags.map((tag) => (
              <span key={tag} className="bg-blue-500 text-white text-sm px-2 py-1 ml-3 rounded-full">
                {tag}
              </span>
            ))}
          </motion.div>
        )}

        {/* Title Section */}
        {eLoading ? (
          <div className="w-48 h-8 bg-gray-400 rounded animate-pulse mt-3 ml-3" />
        ) : (
          <motion.h2
            className="text-white text-xl ml-3"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            {title}
          </motion.h2>
        )}

        {/* Studio Section */}
        {eLoading ? (
          <div className="w-40 h-4 bg-gray-400 rounded animate-pulse mt-2 ml-3" />
        ) : (
          <motion.p
            className="text-gray-400 mt-2 ml-3"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            Studio: {studio}
          </motion.p>
        )}

        {/* Synopsis Section */}
        {eLoading ? (
          <div className="w-60 h-12 bg-gray-400 rounded animate-pulse mt-4 ml-3" />
        ) : (
          <>
            <motion.p
              className="text-white mt-4 text-xl ml-3"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              Synopsis
            </motion.p>
            <motion.p
              className="text-white mt-1 text-opacity-45 ml-3"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              {synopsis}
            </motion.p>
          </>
        )}
      </div>

      {/* Rating Section */}
      {eLoading ? (
        <div className="w-28 h-8 bg-gray-400 rounded animate-pulse m-5" />
      ) : (
        <motion.div
          className="m-5 size-28"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <Rating score={score} />
        </motion.div>
      )}
    </div>
  );
};

const VideoInfo = () => {
  const [eLoading, setELoading] = useState(true);

  // Simulate loading and switch eLoading state after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setELoading(false); // After 1 second, set eLoading to false
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  // Animation variants for fade-in effect and hover effect
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const hoverEffect = {
    hover: { scale: 1.05 },
    rest: { scale: 1 },
  };

  return (
    <motion.div
      className="bg-gray-800 mt-2 text-white p-4 rounded-lg flex items-center w-full"
      variants={hoverEffect} // Hover effect
      initial="rest"
      whileHover="hover"
    >
      {/* Video Title and Info */}
      <div className="w-full">
        {eLoading ? (
          // Skeleton for video title
          <div className="w-1/3 h-6 bg-gray-400 animate-pulse rounded mb-3" />
        ) : (
          <h3 className="text-xl font-semibold">Bleach: Thousand-Year Blood War - The Separation</h3>
        )}
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-3 mt-2">
            {eLoading ? (
              // Skeleton for channel icon and text
              <div className="w-12 h-12 bg-gray-400 animate-pulse rounded-full" />
            ) : (
              <img
                src="https://ih1.redbubble.net/image.5221021342.6521/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
                alt="Channel Icon"
                className="size-14 rounded-full"
              />
            )}

            <div className="text-sm">
              {eLoading ? (
                // Skeleton for channel name and followers
                <div className="w-24 h-4 bg-gray-400 animate-pulse mb-1" />
              ) : (
                <>
                  <p>Pierrot</p>
                  <p className="text-gray-400">202k Followers</p>
                </>
              )}
            </div>

            {eLoading ? (
              // Skeleton for follow button
              <div className="w-24 h-8 bg-gray-400 animate-pulse rounded-full ml-3" />
            ) : (
              <button className="bg-orange-500 ml-3 text-white px-6 py-2 rounded-full">Follow</button>
            )}
          </div>

          <div className="flex space-x-2 items-center ml-auto">
            {eLoading ? (
              // Skeleton for interaction icons
              <div className="w-16 h-8 bg-gray-400 animate-pulse rounded-full" />
            ) : (
              <>
                <div className="flex items-center space-x-1 bg-gray-500 bg-opacity-20 p-3 px-5 rounded-full">
                  <AiOutlineLike className="text-white" size={20} />
                  <span>1k</span>
                </div>
                <AiOutlineDownload className="text-white bg-gray-500 bg-opacity-20 p-3 rounded-full" size={50} />
                <AiOutlineBook className="text-white bg-gray-500 bg-opacity-20 p-3 rounded-full" size={50} />
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};


const Rating = ({ score }) => (
  <div className="bg-green-500 text-white p-4 rounded-lg  text-center">
    <h1 className=' rounded-full text-center text-sm p-1 bg-white  text-green-500'> Score</h1>
    <p className="text-xl mt-3">{score}</p>
    <p className="text-sm">20.3k Users</p>
  </div>
);

const AnimePage = () => {
  const anime = {
    title: "Bleach: Thousand-Year Blood War - The Separation",
    image: "https://static.animecorner.me/2023/07/bleach-16-2-768x432.jpg",  // Replace with your image URL
    live: true,
    viewers: "104k",
    duration: 24.00,
    studio: "Pierrot",
    tags: ["Action", "Adventure", "Fantasy"],
    synopsis: "The anime adapts the final manga arc, Sennen Kessen-hen...",
    score: "8.96",
    currentTime:14.50,
    episodes: [
      { id: 1, isActive:false , title: "Episode 13", date: "Jan 1, 2023", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ8Nefq4qNADawZnvRV75M47p-uhlUpw79Ew&s" },
      { id: 2, isActive:true , title: "Episode 14", date: "Jul 15, 2023", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyTyXB4QeTBWDmlCnhoS0AX1Orr-TxKDfTxA&s" },
      { id: 3, isActive:false , title: "Episode 15", date: "Jul 22, 2023", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnmUrZhFVfE8rceRRMqmTzAlhijLJfJ-PcKQ&s" },
      { id: 4, isActive:false , title: "Episode 16", date: "Jan 1, 2023", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ8Nefq4qNADawZnvRV75M47p-uhlUpw79Ew&s" },
      { id: 5, isActive:false , title: "Episode 17", date: "Jul 15, 2023", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyTyXB4QeTBWDmlCnhoS0AX1Orr-TxKDfTxA&s" },
      { id: 6, isActive:false , title: "Episode 18", date: "Jul 22, 2023", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnmUrZhFVfE8rceRRMqmTzAlhijLJfJ-PcKQ&s" },
      { id: 7, isActive:false , title: "Episode 19", date: "Jan 1, 2023", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ8Nefq4qNADawZnvRV75M47p-uhlUpw79Ew&s" },
      { id: 8, isActive:false , title: "Episode 20", date: "Jul 15, 2023", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyTyXB4QeTBWDmlCnhoS0AX1Orr-TxKDfTxA&s" },
      { id: 9, isActive:false , title: "Episode 21", date: "Jul 22, 2023", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnmUrZhFVfE8rceRRMqmTzAlhijLJfJ-PcKQ&s" },
  
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" mx-auto p-4"
    >
      <div className="flex   gap-4">
        <div className=" flex flex-col gap-2">
          <div className=' flex justify-between  gap-4 w-full'>
          <VideoPlayer
            image={anime.image}
            title={anime.title}
            live={anime.live}
            viewers={anime.viewers}
            duration={anime.duration}
            currentTime={anime.currentTime}
          />
             <div className="col-span-4 h-[300px]">
          <EpisodeList episodes={anime.episodes} />
     
        </div>
        












        
        </div>
        <VideoInfo />
          <AnimeInfo
            title={anime.title}
            studio={anime.studio}
            tags={anime.tags}
            synopsis={anime.synopsis}
            score={anime.score}
          />
          <div className=' flex items-center  justify-between'>
  <h3 className=' '> Comments (12K)</h3>
  <div className=' flex gap-2  border-b border-gray-500 border-opacity-50'> 
  <div className='border-b    border-orange-500 border-opacity-50'> Top Comment </div>
  <div>Newest First</div>
  </div>
 
          </div>
          <div className=' flex  gap-4  mt-8'>
     <img src="https://i.pravatar.cc/300" alt=""  className=' rounded-full border  size-12'/>
     <div className='w-full'>
     <div className= " flex items-center w-full bg-[#323847]  border-opacity-15 border-white  pr-1 border rounded-xl ">
        <input
          type="text"
          className=" text-white p-2 pl-10 bg-[#323847] rounded-xl focus:outline-none"
          placeholder="Add a comment ..."
        />
   
      </div>
     </div>
  </div>
        </div>
     
      </div>
    </motion.div>
  );
};

export default AnimePage;
