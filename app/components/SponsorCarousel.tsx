"use client";
import { useState } from "react";

interface SponsorshipCarouselProps {
  items: {
    image: string;
    link: string;
    title: string;
    description: string;
  }[];
}

export default function SponsorshipCarousel({
  items,
}: SponsorshipCarouselProps) {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrevious = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  // Show 1 item on mobile, 3 items on larger screens
  const visibleItems =
    window.innerWidth < 640
      ? [items[startIndex]]
      : [
          items[startIndex],
          items[(startIndex + 1) % items.length],
          items[(startIndex + 2) % items.length],
        ];

  return (
    <div className="relative flex items-center justify-center">
      <button
        onClick={handlePrevious}
        className="absolute left-0 z-10 p-2 bg-gray-300 rounded-full hover:bg-gray-400"
      >
        &larr;
      </button>
      <div className="flex-grow grid grid-cols-1 grid-rows-1 gap-4 p-10 w-3/4 h-1/4 sm:grid-cols-3">
        {visibleItems.map((item, index) => (
          <div key={index} className="text-center">
            <a href={item.link} target="_blank">
              <img
                src={item.image}
                alt={item.title}
                className="mx-auto h-75 w-full"
              />
            </a>
            <a href={item.link} target="_blank">
              <h2 className="mt-2 font-bold text-xl underline decoration-green decoration-4">{item.title}</h2>
            </a>
            <p className="mt-2 text-sm text-left">{item.description}</p>
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        className="absolute right-0 z-10 p-2 bg-gray-300 rounded-full hover:bg-gray-400"
      >
        &rarr;
      </button>
    </div>
  );
}
