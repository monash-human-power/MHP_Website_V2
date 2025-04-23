import React, { useState } from "react";
import Image from "next/image";

interface TeamContentProps {
  children?: React.ReactNode;
  activeTab: String;
  team: any;
}

const TeamContent: React.FC<TeamContentProps> = ({activeTab, team}) => {
  const [fadeClass, setFadeClass] = useState("animate-fadeIn");

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
                  src={team.image} // Dynamically load the image from JSON
                  alt={team}
                  width={600}
                  height={350}
                  className="rounded-lg"
                />
              </div>
            </div>
            {/* Description */}
            <div className="mt-2 mx-2 lg:mt-0 lg:w-1/2 md:w-1/2 md:items-center">
              <h2 className="font-extralight">{team.description}</h2>
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
              <h2 className="font-extralight">{team.responsibilities}</h2>
            </p>
          </div>
        )}

      </div>
    </>
  );
};

export default TeamContent;
