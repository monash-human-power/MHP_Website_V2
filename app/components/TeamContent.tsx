import React, { useState } from "react";
import Image from "next/image";

interface TeamContentProps {
  activeTab: String;
  children?: React.ReactNode;
  teamData: any;
  team: string;
}

const TeamContent: React.FC<TeamContentProps> = ({
  activeTab,
  teamData,
  team,
}) => {
  const [fadeClass, setFadeClass] = useState("animate-fadeIn");

  // const teamGalleryImages = teamData[team].image.map((image: string, index: number) => ({
  //     id: (index + 1).toString(),
  //     src: image,
  //     alt: `Image ${index + 1} of ${team}`,
  // }));
  return (
    <>
      <div>
        {/* overview */}
        {activeTab === "Overview" && (
          <div
            className={`lex flex-col lg:flex-row justify-center items-center lg:space-x-8 px-8 transition-opacity duration-300 ${fadeClass}`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 md:w-1/2">
              <div className="">
                <Image
                  src={teamData[team].image} // Dynamically load the image from JSON
                  alt={teamData}
                  width={600}
                  height={350}
                  className="rounded-lg"
                />
              </div>
            </div>
            {/* Description */}
            <div className="mt-2 mx-2 lg:mt-0 lg:w-1/2 md:w-1/2 md:items-center">
              <h2 className="font-extralight">{teamData[team].description}</h2>
            </div>
          </div>
        )}

        {/* Responsibilities */}
        {activeTab === "Responsibilities" && (
          <div
            className={`transition-opacity duration-300 ${fadeClass}`}
            style={{
              paddingTop: "20px",
              paddingBottom: "20px",
              width: "90%",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <p className="text-xl">
              Collaborate with riders to enhance performance through movement
              analysis, customised training, and technique optimisation. Plan
              and execute high-speed events and velodrome sessions, including
              researching new event opportunities and managing engagement.
              Develop and implement racing strategies by analysing data, track
              conditions, and conducting post-race evaluations for continuous
              improvement.",
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default TeamContent;
