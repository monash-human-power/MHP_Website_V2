"use client";
import React, { useState } from "react";
import Button from "../Buttons";
import Image from "next/image";

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
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="m-10 flex flex-col items-center justify-center p-5  gap-5 ">
      {/* Card */}
      <div className="flex flex-row -gap-5">
        {/* Grid container for overlaying */}
        <div onClick={ ()=>setIsOpen(prev => !prev)} className="grid grid-cols-1 grid-rows-1 h-[400px]">
          {/* Image container */}
          <div className="col-start-1 row-start-1 z-10 relative h-[400px] max-w-[250px] rounded-xl overflow-hidden  ">
            <Image
              src={img}
              width="800"
              height="300"
              alt={`Subteam ${subteam}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000000] flex flex-col justify-end align-middle p-5">
              <p className="z-10 font-bold text-lg text-white">{subteam}</p>
            </div>
          </div>
        </div>

        {/* Info slide out */}

        {isOpen && (
          <div className=" relative z-0 -ml-20 pl-20 p-5 h-[400px] w-[75%] bg-red-400 rounded-xl">
            BSDBUIA;IKBDASO;HDIOA IJBFIBUSDF
          </div>
        )}
      </div>
      {/* Form button */}
      <Button
        text="Apply for sub-team"
        theme={"dark"}
        hrefString={formLink}
        target={""}
        className="relative"
      />
    </div>
  );
}
