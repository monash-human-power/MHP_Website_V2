import React, { useState } from "react";
import Image from "next/image";

interface TeamContentProps {
  children?: React.ReactNode;
  activeTab: String;
  team: { name: string; description: string; responsibilities: string[]; image: string; Team_Leads: string[];};
}

const TeamContent: React.FC<TeamContentProps> = ({activeTab, team}) => {
  const [fadeClass, setFadeClass] = useState("animate-fadeIn");

  return (
    <>
      <div>
        {/* overview */}
        {activeTab === "Overview" && (
          <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 px-8">
          {/* Image */}
          <div className="w-full lg:w-1/2 md:w-1/2">
            <div className={`transition-opacity duration-300 ${fadeClass}`}>
              <Image
                src={team.image} // Dynamically load the image from JSON
                alt={team.name}
                width={600}
                height={350}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Description */}
          <div className="mt-2 mx-2 lg:mt-0 lg:w-1/2 md:w-1/2 md:items-center">
            <div className={`transition-opacity duration-300 ${fadeClass}`}>
              <h2 className="font-extralight">{team.description}</h2>
            </div>
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
              textAlign: "left",
            }}
          >
            <li className="font-Sansation">
              {team.responsibilities}
            </li>

            {/* Dynamically inserting responsibilities from JSON file */}
            <div>
              {team.responsibilities.map((responsibility, index) => (
                <li key={index}>
                  {responsibility}
                </li>
              ))}

            </div>

            <div>
              <li className="font-Sansation">
                Collaborate with riders to enhance performance through movement
                analysis, customised training, and technique optimisation.
              </li>
              <br></br>
              <li className="font-Sansation">
                Plan and execute high-speed events and velodrome sessions,
                including researching new event opportunities and managing
                engagement.
              </li>
              <br></br>
              <li className="font-Sansation">
                Develop and implement racing strategies by analysing data, track
                conditions, and conducting post-race evaluations for continuous
                improvement.
              </li>
            </div>

          </div>
        )}

      </div>
    </>
  );
};

export default TeamContent;
