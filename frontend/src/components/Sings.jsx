
import yLogo from '../assets/No_smoking_symbol.svg.png'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  yLogo,
  yLogo,
  yLogo
];

const Sings = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 20 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='backdrop-blur-sm backdrop-brightness-[0.95] rounded-xl shadow-md shadow-slate-100 w-full h-full p-2 '>
      <AnimatePresence mode='wait'>
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="h-40 w-40 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} // Adjust the duration as needed

        />
      </AnimatePresence>
    </div>
  );
};

export default Sings;
