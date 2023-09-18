import React from 'react';
import { useParams } from 'react-router-dom';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import Video from '../assets/seavid.mp4'
import Weather from '../components/Weather'
import Time from '../components/Time'
import Date from '../components/Date'
import Posts from '../components/Posts';
import Anouncments from './Anouncments';
import NewsFooter from './NewsFooter';
import Sings from './Sings';
import BackgroundMusic from '../assets/1 Hour SPA (Meditation Music-Relaxing Music-Calming Music).mp3';
import ReactPlayer from 'react-player';
const Kiosk = () => {
  const { username } = useParams();
  const handle = useFullScreenHandle();

  return (
    <div>
      <button onClick={handle.enter}>Enter fullscreen</button>

      <FullScreen className="relative bg-white" handle={handle}>
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute z-0 top-0 left-0 min-w-full min-h-full object-cover"
        >
          <source
            src={Video} // Replace with the path to your video file
            type="video/mp4"
          />
          {/* Add more source tags for different video formats if needed */}
        </video>
        <ReactPlayer
          url="../assets/1 Hour SPA (Meditation Music-Relaxing Music-Calming Music).mp3" // Replace with the path to your audio file
          playing
          loop
          volume={1.0} // Adjust the volume as needed (0.0 to 1.0)
          muted={false} // Set to true if you want to mute
          width="0px" // Hide the player
          height="0px" // Hide the player
        />


        {/* Content */}
       
          <div className='z-10 flex    justify-center '>
            {/* Your content */}
            {/* <div className='z-10 absolute left-80 top-40'><Sings/></div> */}
            <h1 className="text-4xl  z-10 font-serif mt-3  text-orange-500">{username}</h1>
           
            <div className='z-10 absolute left-4 m-2'><Time/></div>
            <div className='z-10 absolute right-1 m-2'> <Date/></div>
          </div>
          
          <div className='flex justify-between m-4 '>
           <div className='text-4xl text-black font-bold z-10 flex flex-col flex-wrap '>
            
              <div className=' max-h-10  '>
                <Posts  username={username}/>
              </div>
                
            </div>
              <div className='flex mt-4 flex-col ' >
                <div className=' z-10 max-w-xl-md flex-grow-0'><Weather/> </div>
                
              </div>
              
          </div>
          <div className='flex flex-col '>
            <div className='z-10 pr-4 flex justify-end '>
                <Anouncments  username={username} />
            </div>
          </div>
          
          <div className=' absolute inset-x-0 bottom-0  rounded-lg'>
            <div className='z-10 justify-center'><NewsFooter/></div>
          </div>

          
       
        
    
        
      </FullScreen>
    </div>
  );
};

export default Kiosk;
