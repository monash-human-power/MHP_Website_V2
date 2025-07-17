"use client";
import React, { useState } from "react";
import Button from "../Buttons";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

type ApplicationContent = {
  description: string;
  responsibilities: string[];
  keySkills: string[];
};

export type ApplicationCardInfo = {
  subteam: string;
  role?: string;
  img: string;
  formLink: string;
  content: ApplicationContent;
};
type ApplicationCardProps = ApplicationCardInfo & {
  onMouseHover: () => void;
  onMouseLeave: () => void;
  key:number;
};

export default function ApplicationCard({
  subteam,
  role,
  img,
  formLink,
  content,
  onMouseHover,
  onMouseLeave,
  key
}: ApplicationCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const contentDisplay = (
    <div className="flex flex-col text-left overflow-y-auto" key={key}>
      {content.description} <br />
      <b>Responsibilities:</b>
      <ul className="pl-4">
        {content.responsibilities.map((responsibility) => (
          <li>{responsibility}</li>
        ))}
      </ul>
      <b>Key Skills:</b>
      <ul className="pl-4">
        {content.keySkills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </div>
  );

  // TODO: FIX HANDLING ON CHROME,

  return (
    <div className="m-10 flex-shrink-0  flex flex-col items-center justify-center p-5  gap-5  ">
      {/* Card */}
      <div className="flex flex-row -gap-5 ">
        {/* Grid container for overlaying */}
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="grid grid-cols-1 grid-rows-1 h-[400px]"
        >
          {/* Image container */}
          <div className="col-start-1 row-start-1 z-10 relative h-[400px] w-[250px] rounded-xl overflow-hidden hover:cursor-pointer ">
            <Image
              src={img}
              width="800"
              height="300"
              alt={`Subteam ${subteam}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000000]/80 flex flex-col justify-end align-middle p-5">
              {/* Hide role + subteam info if on mobile and info is opened */}
              <div className={`${isOpen && " hidden md:block"}`}>
                <p className="z-10 font-bold text-lg text-white">
                  {role ? role : "Team member"}
                </p>
                <p className="z-10  text-lg text-green">{subteam}</p>{" "}
              </div>
            </div>

            {/* Mobile info */}
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className=" flex sm:hidden p-5 absolute inset-0 bg-gradient-to-b from-[#000000]/80 to-[#000000]/90 text-white "
              >
                {contentDisplay}
              </motion.div>
            )}
          </div>
        </div>

        {/* Info slide out */}

        {/* TODO: ALLOW FOR SCROLLING WITH WHEEL HERE */}
        {isOpen && (
          <AnimatePresence>
            <motion.div
              // onClick={() => setIsOpen((prev) => !prev)} TODO: add a collapse button
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 20 }}
              exit={{ opacity: 0 }}
              key={subteam}
              className=" hidden sm:flex relative z-0 -ml-20 pl-20 p-5 h-[400px] max-w-2xl bg-[#000000]/80 text-white  rounded-xl"
              onMouseEnter={onMouseHover}
              onMouseLeave={onMouseLeave}
            >
              {contentDisplay}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
      {/* Form button */}
      <Button
        text="Apply for this role"
        theme={"dark"}
        hrefString={formLink}
        target={"_blank"}
        className="relative"
      />
    </div>
  );
}
