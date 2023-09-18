import React from 'react';
import useSanityListener from '../useSanityListener'; // Make sure to provide the correct path to useSanityListener
import { client } from '../client';

const Anouncments = ({ username }) => {
  const normalizedUsername = username;
  const { announcements } = useSanityListener(client, normalizedUsername);

  return (
    <div className='flex shadow-md  shadow-slate-100 backdrop-brightness-[1] w-[690px] backdrop-blur-xl  p-3 rounded-xl flex-col'>
      <div className='justify-end  flex'>
        {announcements.map((item, index) => (
          <div key={index}>
            {item.AnouncmentsToAdress.map((address, addressIndex) => (
              <span key={addressIndex}>
               <div className='text-white font-custom text-right rtl text-2xl '> {address.name}</div>
                {addressIndex !== item.AnouncmentsToAdress.length - 1 && <br />}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Anouncments;
//  version 2import React, { useState, useEffect } from 'react';
// import useSanityListener from '../useSanityListener'; // Import your useSanityListener hook
// import { client } from '../client';

// const Anouncments = ({ username }) => {
//   const normalizedUsername = username;
//   const { announcements } = useSanityListener(client, normalizedUsername);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const totalAnnouncements = announcements[0]?.AnouncmentsToAdress.length || 0;

//     // Function to advance to the next announcement or reset to the first one
//     const advanceAnnouncement = () => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % totalAnnouncements);
//     };

//     // Timer to advance to the next announcement every 20 seconds
//     const timer = setInterval(advanceAnnouncement, 8000);

//     // Clear the timer when the component unmounts
//     return () => {
//       clearInterval(timer);
//     };
//   }, [announcements]);
//   const total = announcements[0]?.AnouncmentsToAdress.length || 0;
//   const currentAnnouncement =
//     announcements[0]?.AnouncmentsToAdress[currentIndex]?.name || '';

//   return (
//     <div className='flex shadow-md shadow-slate-100 backdrop-brightness-[1] w-[690px] backdrop-blur-xl p-3 rounded-xl flex-col'>
//       <div className='justify-end flex'>
//         <div className='text-white font-custom text-right rtl text-2xl  '>
//           {currentAnnouncement && (
//             <div className='text-white font-custom text-right rtl text-2xl transition duration-150 ease-out hover:ease-in' style={{ opacity: currentAnnouncement ? 1 : 0 }}>
//                 {currentIndex+1}/{total}
//               {currentAnnouncement}
              
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Anouncments;

//working announcments with framer animotion

// import React, { useState, useEffect } from 'react';
// import useSanityListener from '../useSanityListener';
// import { client } from '../client';
// import { motion, AnimatePresence } from 'framer-motion';

// const Anouncments = ({ username }) => {
//   const normalizedUsername = username;
//   const { announcements } = useSanityListener(client, normalizedUsername);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const totalAnnouncements = announcements[0]?.AnouncmentsToAdress.length || 0;

//     const advanceAnnouncement = () => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % totalAnnouncements);
//     };

//     const timer = setInterval(advanceAnnouncement, 8000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, [announcements]);

//   const total = announcements[0]?.AnouncmentsToAdress.length || 0;
//   const currentAnnouncement =
//     announcements[0]?.AnouncmentsToAdress[currentIndex]?.name || '';

//   return (
//     <div className="flex shadow-md shadow-slate-100 backdrop-brightness-[1] w-[690px] backdrop-blur-xl p-3 rounded-xl flex-col">
//       <div className="justify-end flex">
//         <div className="text-white font-custom text-right rtl text-2xl">
//           <AnimatePresence initial={false}>
//             {currentAnnouncement && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: 'auto' }}
//                 exit={{ opacity: 0, height: 0 }}
//                 transition={{ duration: 0.8, ease: 'easeInOut' }}
//                 key={currentIndex}
//               >
//                 {currentIndex + 1}/{total} {currentAnnouncement}
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Anouncments;
