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

  const visibleItems = [
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
      <div className="flex-grow grid grid-cols-3 gap-4 p-10 w-3/4 h-1/4">
        {visibleItems.map((item, index) => (
          <div key={index} className="text-center">
            <a href={item.link}>
              <img
                src={item.image}
                alt={item.title}
                className="mx-auto h-32 w-full object-cover"
              />
            </a>
            <h2 className="mt-2 font-bold text-lg">{item.title}</h2>
            <p className="text-sm">{item.description}</p>
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
