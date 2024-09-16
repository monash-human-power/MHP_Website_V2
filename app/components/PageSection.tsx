"use client";
import React, { useEffect, useRef, useState } from "react";

interface PageSectionProps {
  colourWay: "light" | "dark"; //Options are dark and light
  children: React.ReactNode;
}

const sectionThemes = {
  light: "position-relative bg-white text-black p-12 w-full z-0",
  dark: "position-relative bg-black text-white p-12 w-full z-0",
};

export default function PageSection({ colourWay, children }: PageSectionProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`${sectionThemes[colourWay]} ${
        isVisible ? "animate-fadeIn" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
