import React, { useEffect, useRef, useState } from "react";
import ApplicationCard, { ApplicationCardInfo } from "./ApplicationCard";
import { animate } from "motion";
import { motion, useInView, useMotionValue } from "motion/react";


interface ApplicationCarouselProps{
  applicationInfo: ApplicationCardInfo[]
}

export default function ApplicationCarousel({applicationInfo}:ApplicationCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [pointerDown, setPointerDown] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, scrollX: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false); // if hovering over a card, scroll card not div :D
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
      let newX = 0;
      if (isHovered && scrollRef.current) {
        if (!isCardHovered) {
          e.preventDefault();
        }
                const maxScroll =
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        const currentX = xMotionValue.get();

        // allow for vertical scrolling + horizontal
        if (isCardHovered) {
          // If hovering over card, only allow moving via horizontal scrolling
          newX = Math.max(-maxScroll, Math.min(0, currentX - e.deltaX ));
        } else {
          // else allow both
          newX = Math.max(
            -maxScroll,
            Math.min(0, currentX - (e.deltaX + e.deltaY ))
          );
        }
      }

      animate(xMotionValue, newX, {
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 0.5,
      });
    };

    document.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, [xMotionValue, isHovered,isCardHovered]);

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
        {applicationInfo.map((application, idx) => (
          <motion.div
            key={idx}
            className="flex-shrink-0 "
            initial={{ opacity: 0, y: 20 }}
            animate={isInView && { opacity: 1, y: 0 }}
            transition={{ delay: (idx % applicationInfo.length) * 0.1 }}
            style={{
              userSelect: isDragging ? "none" : "auto",
            }}
          >
            <ApplicationCard
              {...application}
              onMouseHover={() => setIsCardHovered(true)}
              onMouseLeave={() => setIsCardHovered(false)}
              key={idx}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
