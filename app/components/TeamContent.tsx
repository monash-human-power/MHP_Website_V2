import React, { useState } from "react";
import Image from "next/image";

interface TeamContentProps {
  children?: React.ReactNode;
  activeTab: String;
  team: { name: string; description: string; roles: subRole[]; image: string; Team_Leads: string[];};
}

type subRole = {
  role: string;
  responsibilities: string[];
};

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
              <p>{team.description}</p>
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
            
            {/* Dynamically inserting responsibilities from JSON file */}
            <div className="flex flex-wrap gap-8">
              {team.roles.map((subRole, index) => (
                <div key={index} className="flex-1 min-w-[calc(100%-2rem)] md:min-w-[calc(50%-2rem)] lg:min-w-[calc(33.333%-2rem)]">
                  <div className="xl:text-2xl lg:text-xl">{subRole.role}</div>
                  {subRole.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </>
  );
};

export default TeamContent;
