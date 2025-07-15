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
      <div className="fixed top-20 left-0 w-full z-40 animate-fadeIn">
        <nav className="relative w-full shadow-4xl bg-[#ACF601] text-black font-Aldrich xl:text-xl lg:text-l z-1">
          <div className="h-12 py-2 bg-[repeating-linear-gradient(-45deg,_rgba(0,0,0,0.10)_0px,_rgba(0,0,0,0.10)_5px,_transparent_5px,_transparent_15px)] flex items-center justify-between px-4 relative">
            <p className="text-center font-bold uppercase w-full">{text}</p>
            <button
              className="absolute right-4 text-black text-lg font-bold"
              onClick={() => setVisible(false)}
              aria-label="Close banner"
            >
              ×
            </button>
          </div>
        </nav>
      </div>
    </>
  );


};

export default Banner;
