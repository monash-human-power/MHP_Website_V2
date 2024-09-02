import React from "react";
import PageSection from "../components/PageSection";
import Image from "next/image";

export default function Competitions() {
  return (
    <>
      <PageSection colourWay="dark">
        <div className="font-Aldrich bg-black text-white min-h-screen">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl text-[#acf601]">Competitions</h1>
          </div>

          {/* World Human Powered Speed Challenge Section */}
          <div className="flex flex-wrap justify-center items-center mb-10 px-5">
            <div className="w-full lg:w-1/2 p-5">
              <Image
                src="/competitionImage1.png"
                layout="responsive"
                height={50}
                width={100}
                objectFit="cover"
                alt="World Human Powered Speed Challenge"
              />
            </div>
            <div className="w-full lg:w-1/2 p-5">
              <h2 className="text-2xl text-[#acf601]">
                World Human Powered Speed Challenge
              </h2>
              <p className="mt-3">
                The World Human Powered Speed Challenge takes place annually at
                Battle Mountain, Nevada. Teams from around the world gather on
                State Route 305 in a quest to break the human-powered land speed
                record. Whilst the current world record is 144km/h, MHP’s
                participation in 2023 led us to passing the Australian men’s
                single-track record!
              </p>
              <a
                href="https://www.ihpva.org/whpsc/index.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="submit"
                  className="mt-5 px-5 py-2 rounded-md bg-greenbutton text-black border-black font-bold"
                >
                  Read More
                </button>
              </a>
            </div>
          </div>

          {/* OzHPV Speed Trials Section */}
          <div className="flex flex-wrap justify-center items-center mb-10 px-5">
            <div className="w-full lg:w-1/2 p-5">
              <h2 className="text-2xl text-[#acf601]">OzHPV Speed Trials</h2>
              <p className="mt-3">
                The OzHPV Challenge is a series of races to determine the best
                combination of human powered vehicle and rider. Its held at the
                Ford Proving Grounds in You Yangs, Victoria. The current
                Australian record for this competition is 96.68 km/h.
              </p>
              <a
                href="https://www.ozhpv.org.au/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-5 px-5 py-2 rounded-md bg-greenbutton text-black hover:bg-green-700">
                  Read More
                </button>
              </a>
            </div>
            <div className="w-full lg:w-1/2 p-5">
              <Image
                src="/competitionImage2.png"
                layout="responsive"
                height={50}
                width={2000}
                objectFit="cover"
                alt="OzHPV Speed Trials"
              />
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
