"use client";
import React, { useEffect, useRef, useState } from "react";

interface PageSectionProps {
  hasDivider?:boolean;
  children: React.ReactNode;
}

PageSection.defaultProps = {
  message: 'Hello',
  haveDivider:true,
};


export default function PageSection({  hasDivider,children }: PageSectionProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const darkTheme = "position-relative bg-black text-white p-6 w-full z-0"
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

  if (hasDivider)
{  return (
    <>
    <div
    style={{
      borderTop: "2px solid #5e5b5b", // Top border
      width: "100%",
      margin: "0 auto",
      textAlign: "center",
      paddingTop: "20px"
    }}
      ref={sectionRef}
      className={`${darkTheme} ${
        isVisible ? "animate-fadeIn" : "opacity-0"
      }`}
    >
      {children}
    </div>
    </>
  );
} else {
  return (
    <>
    <div

      ref={sectionRef}
      className={`${darkTheme} ${
        isVisible ? "animate-fadeIn" : "opacity-0"
      }`}
    >
      {children}
    </div>
    </>
  );
}

}

