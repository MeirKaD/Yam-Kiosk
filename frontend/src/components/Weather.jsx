import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';
const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiKey = '628348a71064189bc7ba4067dcd3fdb7';
  const city = 'Ashkelon,il';

  const fetchData = () => {
    // Fetch current weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.error('Error fetching current weather data:', error);
      });

    // Fetch 7-day forecast data
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setForecastData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching forecast data:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    // Fetch initial data
    fetchData();

    // Set up an interval to fetch data every 24 hours (in milliseconds)
    const intervalId = setInterval(fetchData, 24 * 60 * 60 * 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [apiKey, city]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!weatherData || !forecastData) {
    return <div>Weather data not available</div>;
  }

  // Extract the daily forecast data for the next 7 days
  const dailyForecast = forecastData.list.filter((item, index) => index % 8 === 0);

  return (
    <div className=' backdrop-blur-sm backdrop-brightness-[0.95] rounded-xl shadow-md shadow-slate-100 w-full h-full '> 
      <div className='flex flex-row justify-evenly '>
        {dailyForecast.map((forecast, index) => (
          <div className='m-2'>
            <div key={index}>
                <WeatherCard dt_txt={forecast.dt_txt} temperature={forecast.main.temp_max} description={forecast.weather[0].description}/>
              {/* {forecast.dt_txt}: {forecast.main.temp_max}°C ({forecast.weather[0].description}) */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherComponent;
