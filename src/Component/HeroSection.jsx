import { useState } from 'react';
import { CiStreamOn } from 'react-icons/ci';
import { FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
const HeroSection = ({ toggle }) => {
  const slides = [
    {
      title: 'Bleach: Thousand Year Blood War',
      subtitle: 'Episode 16 - The Separation',
      bgImage: 'https://lh5.googleusercontent.com/proxy/__azjknsedX8yyrDoawjP6CzHLcDXrQAIVze5LDuQO5QHxVxb-sJuxtnYl5f1ZlcHsvQiLjH3X0qbOE6PIVbvWLu1kLY-JXkupvDMeRqbEAlY0jWSz21U8j9jCERWwqOv8qbCYa3jwZz1S3pYQ',
      viewer: '105k',
    },
    {
      title: 'Attack on Titan: The Final Season',
      subtitle: 'Episode 87 - The Dawn of Humanity',
      bgImage: 'https://wallpapercat.com/w/middle-retina/9/2/6/25951-3840x2160-desktop-4k-attack-on-titan-the-final-season-wallpaper-photo.jpg',
      viewer: '10k',
    },
    {
      title: 'Jujutsu Kaisen',
      subtitle: 'Episode 24 - Accomplices',
      bgImage: 'https://haikupop.com/cdn/shop/articles/jujutsu-kaisen-season-2-the-anime-phenomenon-bridging-past-and-present-948083.jpg?v=1694662349&width=1920',
      viewer: '50k',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="p-5 w-full">
      <motion.div
        className="relative bg-cover bg-center w-full h-72 rounded-2xl"
        style={{ backgroundImage: `url(${slides[currentSlide].bgImage})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex w-full z-20 items-center gap-3 pt-3 pr-5 justify-end rounded-b-2xl">
          <div className="rounded-full text-white opacity-100 bg-black bg-opacity-80 p-2 flex items-center gap-2 px-4 border border-white border-opacity-15">
            <FaUsers />
            {slides[currentSlide].viewer}
          </div>
          <div className="rounded-full text-white opacity-100 bg-red-600 bg-opacity-100 p-2 flex items-center gap-2 px-4 border border-white border-opacity-15">
            <CiStreamOn />
            Live
          </div>
        </div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-b-2xl flex justify-between items-end p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-start flex-col mb-10">
            <motion.h1
              className="text-white text-4xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p
              className="text-gray-200 text-lg text-opacity-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>
          </div>
          <motion.button
            onClick={toggle}
            className="bg-primary text-white px-4 py-2 mt-4 rounded-full"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Watch Now
          </motion.button>
        </motion.div>

        <div className="absolute top-4 left-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <motion.span
              key={index}
              onClick={() => handleDotClick(index)}
              className={`cursor-pointer size-5 rounded-full ${
                currentSlide === index ? 'bg-white' : 'bg-gray-500'
              }`}
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
