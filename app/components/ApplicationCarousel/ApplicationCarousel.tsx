import React, {  useEffect, useRef, useState } from "react";
import ApplicationCard from "./ApplicationCard";
import { animate } from "motion";
import { motion, useInView, useMotionValue } from "motion/react";

const teamApplications = [
  {
    subteam: "Operations",
    img: "/images/join_page/join_operations.jpg",
    formLink: "https://forms.gle/HHhRFBUFKCiRtEyH9",
  },
  {
    subteam: "Electrical - Software",
    img: "/images/join_page/join_electrical.jpg",
    formLink: "https://forms.gle/TjAdcGJ4XshRsRn49",
  },  {
    subteam: "Electrical - Hardware",
    img: "/images/join_page/join_electrical.jpg",
    formLink: "https://forms.gle/7PQXNrRSYSEDM9NF8",
  },
  {
    subteam: "Materials",
    img: "/images/join_page/join_materials.jpg",
    formLink: "https://forms.gle/kpHaodUN7fvxmfjh9",
  },
  {
    subteam: "Aerodynamics",
    img: "/images/join_page/join_aerodynamics.jpg",
    formLink: "https://forms.gle/Mz3PqnVuEYwZ2CM17",
  },
  {
    subteam: "Rider Development",
    img: "/images/join_page/join_rider_dev.jpg",
    formLink: "https://forms.gle/Xm8KgDh1M4Vb54PP9",
  },
  {
    subteam: "Chassis and Drivetrain",
    img: "/images/join_page/join_chassis_drivetrain.jpg",
    formLink: "https://forms.gle/wJXyqcAnRGDGUYSv9",
  },
];

export default function ApplicationCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [pointerDown, setPointerDown] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, scrollX: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const xMotionValue = useMotionValue(0);
  const isInView = useInView(scrollRef, { once: true, amount: 0.8 });


  const handlePointerDown = (e: React.PointerEvent) => {
    setPointerDown(true);
    setDragStart({
      x: e.clientX,
      scrollX: xMotionValue.get(),
    });
  };



  // Track pointer move when pointer is down
  useEffect(() => {
    if (!pointerDown) return;

    const handlePointerMove = (e: PointerEvent) => {
      if (!scrollRef.current) return;

      const deltaX = Math.abs(e.clientX - dragStart.x);

      if (!isDragging && deltaX > 8) {
        setIsDragging(true);
        document.body.style.cursor = "grabbing";
      }

      // Only update position if we're actively dragging
      if (isDragging) {
        const maxScroll =
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        const totalDeltaX = e.clientX - dragStart.x;
        const newX = Math.max(
          -maxScroll,
          Math.min(0, dragStart.scrollX + totalDeltaX)
        );
        xMotionValue.set(newX);
      }

    };

    const handlePointerUp = () => {
      setIsDragging(false);
      setPointerDown(false);
      document.body.style.cursor = "default";
    };

    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerup", handlePointerUp);
    document.addEventListener("pointercancel", handlePointerUp);

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("pointercancel", handlePointerUp);
    };
  }, [pointerDown, isDragging, dragStart, xMotionValue]);

  // Wheel scrolling handling
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isHovered && scrollRef.current) {
        e.preventDefault();
        const maxScroll =
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        const currentX = xMotionValue.get();

        // allow for vertical scrolling + horizontal
        const newX = Math.max(
          -maxScroll,
          Math.min(0, currentX - (e.deltaX * 0.9+ e.deltaY * 0.9))
        );



        animate(xMotionValue, newX, {
          type: "spring",
          stiffness: 400,
          damping: 30,
          mass: 0.5,
        });
      }
    };

    document.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, [xMotionValue, isHovered]);

  return (
    <div className="overflow-x-scroll overflow-y-hidden  scrollbar-dark">
      <motion.div
        ref={scrollRef}
        className="w-full mt-12 sticky flex flex-row nowrap justify-between  cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onPointerDown={handlePointerDown}
        style={{
          x: xMotionValue,
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        {teamApplications.map((team, idx) => (
          <motion.div
            key={idx}
            className="flex-shrink-0 "
            initial={{ opacity: 0, y: 20 }}
            animate={isInView && { opacity: 1, y: 0 }}
            transition={{ delay: (idx % teamApplications.length) * 0.1 }}
            style={{
              userSelect: isDragging ? "none" : "auto",
            }}
          >
            <ApplicationCard {...team} key={idx} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
