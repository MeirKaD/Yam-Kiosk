import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

const NewsCarousel = () => {
  const [newsData, setNewsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://rss.walla.co.il/feed/22?num=50'
        );
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response.data, 'text/xml');
        const items = xmlDoc.getElementsByTagName('item');
        const news = Array.from(items).map((item) => ({
          title: item.getElementsByTagName('title')[0].textContent,
          pubDate: item.getElementsByTagName('pubDate')[0].textContent,
        }));
        setNewsData(news);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
    const newsUpdateInterval = setInterval(fetchNews, 24 * 60 * 60 * 1000); // Update news every 24 hours

    return () => {
      clearInterval(newsUpdateInterval);
    };
  }, []);

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === newsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change news every 5 seconds

    return () => {
      clearInterval(carouselInterval);
    };
  }, [newsData]);

  return (
    <div className=" w-full h-16 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className=" w-full h-full backdrop-blur-lg p-4 flex flex-col justify-center items-center rounded-lg"
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: '0%' }}
          exit={{ opacity: 0, x: '-100%' }}
        >
          <h3 className="text-lg font-bold">{newsData[currentIndex]?.title}</h3>
          <p className="text-sm text-gray-500">
            {newsData[currentIndex]?.pubDate}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default NewsCarousel;
