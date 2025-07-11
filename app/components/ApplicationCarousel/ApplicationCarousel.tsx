import React, { useEffect, useRef, useState } from "react";
import ApplicationCard from "./ApplicationCard";
import { animate } from "motion";
import { motion, useMotionValue, useScroll } from "motion/react";

const teamApplications = [
  {
    subteam: "Operations",
    img: "/images/join_page/join_operations.jpg",
    formLink: "https://www.google.com",
  },
  {
    subteam: "Electrical",
    img: "/images/join_page/join_electrical.jpg",
    formLink: "https://www.google.com",
  },
  {
    subteam: "Materials",
    img: "/images/join_page/join_materials.jpg",
    formLink: "https://www.google.com",
  },
  {
    subteam: "Aerodynamics",
    img: "/images/join_page/join_aerodynamics.jpg",
    formLink: "https://www.google.com",
  },
  {
    subteam: "Rider Development",
    img: "/images/join_page/join_rider_dev.jpg",
    formLink: "https://www.google.com",
  },
  {
    subteam: "Chassis and Drivetrain",
    img: "/images/join_page/join_chassis_drivetrain.jpg",
    formLink: "https://www.google.com",
  },
];

export default function ApplicationCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const [openCard, setOpenCard] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const items = [...teamApplications, ...teamApplications];
  const xMotionValue = useMotionValue(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      console.log("scroll progress", scrollYProgress);

      if (isHovered && scrollRef.current) {
        // Prevent default scrolling
        e.preventDefault();
        console.log("prevented");

        // Calculate new position
        const maxScroll =
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        const currentX = xMotionValue.get();
        const newX = Math.max(
          -maxScroll,
          Math.min(0, currentX - e.deltaY * 0.5)
        );

        animate(xMotionValue, newX, {
          type: "spring",
          stiffness: 5000,
          damping: 40,
          mass: 0.1,
          duration: 0.1,
        });
      } else {
        console.log("allowed");
      }
    };

    document.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, [xMotionValue, isHovered, scrollYProgress]);

  return (
    <div className="overflow-hidden">
      <motion.div
        ref={scrollRef}
        style={{ x: xMotionValue }} // Apply the motion value
        className=" w-full mt-12 sticky flex flex-row nowrap justify-between   bg-red-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {items.map((team, idx) => (
          <motion.div
            key={idx}
            className="flex-shrink-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <ApplicationCard {...team} key={idx} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
