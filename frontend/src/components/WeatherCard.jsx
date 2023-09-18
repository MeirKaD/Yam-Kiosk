import React from 'react';
import dayimg from '../assets/day.gif';
import fewclouds from '../assets/few_clouds.gif'
import overcast_clouds from '../assets/overtcast_clouds.gif'
import light_rain from '../assets/light-rain.gif'
import thunderstorm from '../assets/thunderstorm.gif'
import snow from '../assets/snow.gif'
const WeatherCard = ({ dt_txt ,temperature ,description}) => {
  // Parse the dt_txt string into a Date object
  const date = new Date(dt_txt);

  // Get the month and day from the Date object
  const month = date.getMonth() + 1; // Adding 1 to get the month as a number
  const day = date.getDate();
  const roundedTemperature = Math.round(temperature);
  let icon;
  if (description.includes("clear sky")) {
    icon = dayimg;
  } else if (description.includes("few clouds") || description.includes("scattered clouds") || description.includes("broken clouds")) {
    icon = fewclouds;
  } else if (description.includes("overcast clouds") || description.includes("cloudy")) {
    icon = overcast_clouds;
  } else if (description.includes("light rain")) {
    icon = light_rain;
  } else if (description.includes("thunderstorm")) {
    icon = thunderstorm;
  } else if (description.includes("snow")) {
    icon = snow;
  } else {
    icon = "unknown.png";
  }
  return (
    <div id='card__container' className='shadow-md shadow-slate-100 backdrop-brightness-[0] h-full w-full p-1 justify-between flex rounded-xl flex-col'>
      <div className=' text-xl text-white text-shadow font-extralight drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
      {`${roundedTemperature}°C`}
      </div>
      <div className='flex justify-center'>
     <img src={icon} alt={description} className='h-10 w-10 '/>
      </div>
      <div className="m-2 text-white  font-thin text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        {`${day}/${month}`}
      </div>
    </div>
  );
}

export default WeatherCard;
