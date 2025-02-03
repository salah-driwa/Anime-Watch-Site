import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Sidebar from "../Component/Sidenav";
import Navbar from "../Component/Navbar";
import HeroSection from "../Component/HeroSection";
import Trending from "../Component/Trending";
import ContinueWatching from "../Component/ContinueWatching";
import AnimePage from '../Component/AnimePage';

const Index = () => {
  // Step 1: Initialize the state to control the visibility
  const [isContentVisible, setIsContentVisible] = useState(true);

  // Step 2: Use useEffect to retrieve the saved state from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem("isContentVisible");
    if (savedState !== null) {
      setIsContentVisible(JSON.parse(savedState));
    }
  }, []);

  // Step 3: Create a function to toggle the state and save it to localStorage
  const toggleContentVisibility = () => {
    setIsContentVisible(prevState => {
      const newState = !prevState;
      localStorage.setItem("isContentVisible", JSON.stringify(newState)); // Save to localStorage
      return newState;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="flex flex-col bg-bg h-full">
        <Navbar toggle={toggleContentVisibility} />
        <div className="flex bg-bg">
          <Sidebar toggle={toggleContentVisibility} />
          {/* Step 4: Conditionally render the content based on the state */}
          {isContentVisible ? (
            <div className="flex flex-col bg-bgDark flex-1 overflow-x-auto">
              <HeroSection toggle={toggleContentVisibility} />
              <div className="overflow-x-auto">
                <ContinueWatching toggle={toggleContentVisibility} />
              </div>
              <div className="overflow-x-auto">
                <Trending toggle={toggleContentVisibility} />
              </div>
            </div>
          ) : (
            <div className="flex flex-col bg-bgDark flex-1 min-h-screen">
              <AnimePage />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Index;
