// src/pages/index.jsx
//import React from 'react';
import { motion } from "framer-motion";
import Sidebar from "../Component/Sidenav";
import Navbar from "../Component/Navbar";
import HeroSection from "../Component/HeroSection";
import Trending from "../Component/Trending";
import ContinueWatching from "../Component/ContinueWatching";
const Index = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className=" w-full"  
  > 
  <div className="flex flex-col w-full bg-bg  h-full">
  <Navbar />
    
      <div className=" flex  bg-bg">
      <Sidebar />
      <div className=" flex bg-bgDark  w-full flex-col">
        <HeroSection />
        <ContinueWatching />
        <Trending />
        </div>
      </div>
    </div>
  </motion.div>
  );
};

export default Index;
