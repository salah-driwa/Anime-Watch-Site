import  { useState } from 'react';
import { motion } from "framer-motion";
import Sidebar from "../Component/Sidenav";
import Navbar from "../Component/Navbar";
import HeroSection from "../Component/HeroSection";
import Trending from "../Component/Trending";
import ContinueWatching from "../Component/ContinueWatching";
import AnimePage from '../Component/AnimePage';

const Index = () => {
  // Step 2: Initialize the state to control the visibility
  const [isContentVisible, setIsContentVisible] = useState(true);

  // Step 3: Create a function to toggle the state
  const toggleContentVisibility = () => {
    setIsContentVisible(prevState => !prevState);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="flex flex-col bg-bg h-full">
        <Navbar  toggle={toggleContentVisibility}/>
     

        <div className="flex bg-bg">
          <Sidebar  toggle={toggleContentVisibility} />
         

            {/* Step 4: Add a button to toggle the visibility */}
          
            {/* Step 5: Conditionally render the content based on the state */}
            {isContentVisible ? (
               <div className="flex flex-col bg-bgDark flex-1 overflow-x-auto">
            <HeroSection toggle={toggleContentVisibility}/>
         
                <div className="overflow-x-auto">
                  <ContinueWatching toggle={toggleContentVisibility} />
                </div>
                <div className="overflow-x-auto">
                  <Trending  toggle={toggleContentVisibility}/>
                </div>
            
              </div>
            ) : <div className='flex flex-col bg-bgDark flex-1  min-h-screen'>
              <AnimePage/>
              </div>}
         
        </div>
      </div>
    </motion.div>
  );
};

export default Index;
