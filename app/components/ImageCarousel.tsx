"use client";

import React from "react"
import { useState, useEffect } from 'react';
import Image from "next/image";

// Set types of props
interface ImageCarouselProps {
  images: string[];
}


export default function ImageCarousel({
  images,
}: ImageCarouselProps ) {

// Stores the index of the image that is currently visible
const [currentImage, setCurrentImage] = useState(0);

// Automatically go to the next image every 3 seconds
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  }, 3000);

  return () => clearInterval(interval);
}, [images.length]);


// When the button is clicked, the image index is updated
function handleClick(index: number) {
  setCurrentImage(index);
}

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-96 flex-shrink-0"
          >
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentImage ? 'bg-black' : 'bg-white opacity-50'} focus:outline-none`}
            onClick={() => handleClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}