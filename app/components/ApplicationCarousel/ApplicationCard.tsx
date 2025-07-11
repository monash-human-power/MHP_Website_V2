"use client";
import React, { useState } from "react";
import Button from "../Buttons";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

interface ApplicationCardProps {
  subteam: string;
  img: string;
  formLink: string;
}

export default function ApplicationCard({
  subteam,
  img,
  formLink,
}: ApplicationCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  // TODO: Consider mobile view, compact info into the card?
  return (
    <div className="m-10 flex-shrink-0  flex flex-col items-center justify-center p-5  gap-5 ">
      {/* Card */}
      <div className="flex flex-row -gap-5">
        {/* Grid container for overlaying */}
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="grid grid-cols-1 grid-rows-1 h-[400px]"
        >
          {/* Image container */}
          <div className="col-start-1 row-start-1 z-10 relative h-[400px] w-[250px] rounded-xl overflow-hidden  ">
            <Image
              src={img}
              width="800"
              height="300"
              alt={`Subteam ${subteam}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000000b1] flex flex-col justify-end align-middle p-5">
              <p className="z-10 font-bold text-lg text-white">{subteam}</p>
            </div>
          </div>
        </div>

        {/* Info slide out */}

        {isOpen && (
          <AnimatePresence>
          <motion.div
            // onClick={() => setIsOpen((prev) => !prev)} TODO: add a collapse button
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 20 }}
              exit={{ opacity: 0}}
              key={subteam}
            className=" relative z-0 -ml-20 pl-20 p-5 h-[400px] min-w-2xl bg-red-400 rounded-xl"
          >
            BSDBUIA;IKBDASO;HDIOA IJBFIBUSDF
            </motion.div>
            </AnimatePresence>
        )}
      </div>
      {/* Form button */}
      <Button
        text="Apply for sub-team"
        theme={"dark"}
        hrefString={formLink}
        target={"_blank"}
        className="relative"
      />
    </div>
  );
}
