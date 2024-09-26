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

  // Show 2 items on mobile, 3 items on larger screens
  const visibleItems =
    window.innerWidth < 640
      ? [items[startIndex], items[(startIndex + 1) % items.length]]
      : [
          items[startIndex],
          items[(startIndex + 1) % items.length],
          items[(startIndex + 2) % items.length],
        ];

  return (
    <div className="relative flex mt-5 items-center justify-center">
      <button
        onClick={handlePrevious}
        className="absolute left-0 z-10 p-2 bg-gray-300 rounded-full hover:bg-gray-400"
      >
        &larr;
      </button>
      <div className="flex-grow grid grid-cols-2  gap-4 p-10 w-3/4 h-1/4 sm:grid-cols-3 sm:p-10 ">
        {visibleItems.map((item, index) => (
          <div key={index} className="text-center">
            <a href={item.link}>
              <img
                src={item.image}
                alt={item.title}
                className="mx-auto h-75 w-full"
              />
            </a>
            <h2 className="mt-2 font-bold text-xl">{item.title}</h2>
            {/* <p className="text-l">{item.description}</p> */}
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
