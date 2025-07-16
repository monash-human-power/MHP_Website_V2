'use client'
import { useState } from "react";
interface bannerProps {
  text: string;
  isVisible: boolean;
}

function Banner({ text , isVisible } : bannerProps) {
  // Set visible
  const [visible, setVisible] = useState(isVisible);
  
  if (!visible) {
    return null;
  }

  
  return (
    <>
      <div className="w-full z-20 animate-fadeIn">
        <nav className="relative w-full shadow-4xl bg-[#ACF601]">
          <div className="min-h-[2rem] py-2 flex items-center justify-between relative bg-[repeating-linear-gradient(-45deg,_rgba(0,0,0,0.10)_0px,_rgba(0,0,0,0.10)_5px,_transparent_5px,_transparent_15px)]">
            <p className="px-10 text-center text-black font-Aldrich font-bold uppercase w-full text-sm sm:text-md md:text-xl lg:text-2xl xl:text-3xl z-1">
              {text}
            </p>
            {/* Cross button */}
            <button
              className="absolute right-4 text-black"
              onClick={() => setVisible(false)}
              aria-label="Close banner"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </>
  );


};

export default Banner;
