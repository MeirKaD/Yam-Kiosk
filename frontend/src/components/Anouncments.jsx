import React, { useState, useEffect } from 'react';
import useSanityListener from '../useSanityListener';
import { client } from '../client';
import { motion, AnimatePresence } from 'framer-motion';
import { BiMessageAlt } from 'react-icons/bi';

const Anouncments = ({ username }) => {
  const normalizedUsername = username;
  const { announcements } = useSanityListener(client, normalizedUsername);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const totalAnnouncements = announcements[0]?.AnouncmentsToAdress.length || 0;

    const advanceAnnouncement = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalAnnouncements);
    };

    const timer = setInterval(advanceAnnouncement, 8000);

    return () => {
      clearInterval(timer);
    };
  }, [announcements]);

  const total = announcements[0]?.AnouncmentsToAdress.length || 0;
  const currentAnnouncement =
    announcements[0]?.AnouncmentsToAdress[currentIndex]?.name || '';

  return (
    <div className="flex shadow-md shadow-slate-100 backdrop-brightness-[1] w-[400px] backdrop-blur-xl p-1 rounded-xl flex-col">
      <div className="justify-end flex">
        <div className="text-white font-custom text-right rtl text-2xl">
        <AnimatePresence initial={false}>
        
            <div className='flex justify-end relative text-blue-200/50'>
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                key={currentIndex}
                color={'blue'}
              >
               <p className=' text-base text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-1 absolute pr-3 pt-0  top-0 right-0'>{currentIndex + 1}/{total}</p> 
                <BiMessageAlt className='h-12 w-12 ' />
                </motion.div>
            </div>
            
       </AnimatePresence>
          <AnimatePresence initial={false}>
         
            {currentAnnouncement && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                key={currentIndex}
                className='m-2 text-lg'
              >
                {currentAnnouncement}
              
              </motion.div>
            )}
             
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Anouncments;
