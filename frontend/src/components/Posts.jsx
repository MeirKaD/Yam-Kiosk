import imageUrlBuilder from '@sanity/image-url';
import React, { useState, useEffect } from 'react';
import { client } from '../client';
import useSanityListener from '../SanityPostsListenr'; // Import your Sanity listener

const Posts = ({ username }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { posts } = useSanityListener(client, username); // Replace 'client' with your Sanity client

  useEffect(() => {
    const totalPhotos = posts[0]?.postsToAdress.length || 0;

    const advancePost = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPhotos);
    };

    const timer = setInterval(advancePost, 8000);

    return () => {
      clearInterval(timer);
    };
  }, [posts]);

  // Define a function to build image URLs from Sanity references
  const buildImageUrl = (imageReference) => {
    return imageUrlBuilder(client).image(imageReference).url();
  };
  
  // Render the currently visible photos in separate divs
  return (
    
    <div className="grid grid-cols-1  gap-y-6  mt-6">
      {posts.map((post, postIndex) => {
        const totalPhotos = posts[0]?.postsToAdress.length || 0;
        return post.postsToAdress?.map((photo, photoIndex) => {
          const effectiveIndex = (currentIndex + photoIndex) % totalPhotos;
          const imageRef = photo.poster.asset._ref;

          return (
            <div
              key={`${postIndex}-${photoIndex}`}
              className="backdrop-blur-xl backdrop-brightness-[0.95]  rounded-xl shadow-md shadow-slate-100 p-4 flex justify-center "
            >
              {/* Use your buildImageUrl function to get the image URL */}
              <img src={buildImageUrl(imageRef)} alt={`Post ${effectiveIndex}`} className='w-24 h-24'/>
            </div>
          );
        });
      })}
    </div>
  );
};

export default Posts;
