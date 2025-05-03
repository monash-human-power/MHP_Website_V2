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
  image: string;
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
            <div className="flex flex-col gap-12">
              {team.roles.map((subRole, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-2 items-center gap-8"
                >
                  {/* Responsibilities on left side for even rows, image on right side for odd rows for medium screens and above.
                  Otherwise, stack normally in single column */}
                  <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'} flex flex-col`}>
                    <div className="xl:text-2xl lg:text-xl font-semibold mb-2">
                      {subRole.role}
                    </div>
                    {subRole.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </div>

                  <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}` + ` flex justify-center items-center`}>
                    <img
                      src={`${subRole.image}`}
                      alt={`${subRole.role}`}
                      className="
                      h-auto object-contain rounded-xl
                      max-w-[200px] max-h-[150px]
                      sm:max-w-[250px] sm:max-h-[200px]
                      md:max-w-[300px] md:max-h-[250px]
                      lg:max-w-[400px] lg:max-h-[300px]
                    "
                    />
                  </div>
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
