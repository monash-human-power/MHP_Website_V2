"use client";
import { useState } from "react";
import Image from "next/image";
import PageSection from "../components/PageSection";
import teamData from "../../public/JSONs/teams.json"; // Importing the JSON file

export default function TeamPage() {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("animate-fadeIn");

  // Functions to handle next/prev team navigation
  const nextTeam = () => {
    setFadeClass("animate-fadeOut");
    setTimeout(() => {
      setCurrentTeamIndex(
        (prevIndex) => (prevIndex + 1) % teamData.sub_teams.length
      );
      setFadeClass("animate-fadeIn");
    }, 300); // Match the duration with the animation
  };

  const prevTeam = () => {
    setFadeClass("animate-fadeOut");
    setTimeout(() => {
      setCurrentTeamIndex((prevIndex) =>
        prevIndex === 0 ? teamData.sub_teams.length - 1 : prevIndex - 1
      );
      setFadeClass("animate-fadeIn");
    }, 300); // Match the duration with the animation
  };

  // Get the current team data
  const currentTeam = teamData.sub_teams[currentTeamIndex];

  // Helper function to determine the layout for the last row
  const getLastRowClasses = (members, index) => {
    const membersPerRow = 3;
    const totalMembers = members.length;
    const isLastRow =
      index >= totalMembers - (totalMembers % membersPerRow || membersPerRow);

    if (!isLastRow) return "";

    const membersInLastRow = totalMembers % membersPerRow;

    if (membersInLastRow === 1 && index === totalMembers - 1) {
      return "lg:col-start-2 lg:col-end-3"; // Center the single member
    } else if (
      membersInLastRow === 2 &&
      (index === totalMembers - 2 || index === totalMembers - 1)
    ) {
      return index === totalMembers - 2
        ? "lg:col-start-1 lg:col-end-2"
        : "lg:col-start-3 lg:col-end-4"; // First and third column
    }
    return ""; // For rows with 3 members, default layout applies
  };

  return (
    <>
      <PageSection colourWay="dark">
        <section className="relative text-center py-5 animate-fadeIn">
          <div className="relative z-10">
            <h1 className="text-5xl font-bold">Meet our team</h1>
            <div className="flex justify-center items-center mt-6">
              <Image
                src="/teams_image_1.png"
                alt="Team photo"
                width={1100}
                height={500}
                className="rounded-lg"
              />
            </div>

            <h2 className="mt-4 mx-20">
              We, at Monash Human Power are a diverse team of Monash University
              students, bringing together expertise from various engineering
              disciplines to design cutting-edge human-powered vehicles.
            </h2>
            <h3 className="mt-2 text-greenbutton">
              Learn more about our sub-teams below!
            </h3>
          </div>
        </section>
      </PageSection>

      {/* Sub-teams navigation */}
      <PageSection colourWay="light">
        <section className="flex justify-center items-center bg-gray-900">
          <button
            onClick={prevTeam}
            className="z-10 p-4 bg-gray-300 rounded-full hover:bg-gray-400 text-4xl w-16 h-16 flex items-center justify-center"
          >
            &larr;
          </button>
          <h2 className="text-3xl font-bold mx-8 underline decoration-blue-500">
            {currentTeam.name}
          </h2>
          <button
            onClick={nextTeam}
            className="z-10 p-4 bg-gray-300 rounded-full hover:bg-gray-400 text-4xl w-16 h-16 flex items-center justify-center"
          >
            &rarr;
          </button>
        </section>

        {/* Dynamic Team Section */}
        <section className="">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 px-8">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className={`transition-opacity duration-300 ${fadeClass}`}>
                <Image
                  src={currentTeam.image} // Dynamically load the image from JSON
                  alt={currentTeam.name}
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Description */}
            <div className="mt-2 lg:mt-0 lg:w-1/2">
              <div className={`transition-opacity duration-300 ${fadeClass}`}>
                <h2>{currentTeam.description}</h2>
              </div>
            </div>
          </div>
        </section>
      </PageSection>

      {/* Team Leads and Members Section */}
      <PageSection colourWay="dark">
        <section
          className={`bg-gray-800 ${fadeClass} bg-[url('/teams_background.png')]  bg-top bg-no-repeat`}
        >
          <h2 className="text-center text-4xl font-bold mb-2">Team Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-8 mb-12">
            {currentTeam.Team_Leads?.map((lead, index) => (
              <div
                key={index}
                className="bg-gray-900 p-4 rounded-lg text-center"
              >
                <Image
                  src={lead.image} // Load team lead's image
                  alt={lead.name}
                  width={200}
                  height={200}
                  className="mx-auto"
                />
                <h4 className="text-xl font-bold mt-4 text-greenbutton">
                  {lead.name}
                </h4>
                <p>{lead.role}</p>
                <p>{lead.department}</p>
              </div>
            ))}
          </div>

          {/* Team Members Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
            {currentTeam.members?.map((member, index) => (
              <div
                key={index}
                className={`bg-gray-900 p-4 rounded-lg text-center ${getLastRowClasses(
                  currentTeam.members,
                  index
                )}`}
              >
                <Image
                  src={member.image} // Load team member's image
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto"
                />
                <h4 className="text-l font-bold mt-4 text-greenbutton">
                  {member.name}
                </h4>
                <p>{member.role}</p>
                <p>{member.department}</p>
              </div>
            ))}
          </div>
        </section>
      </PageSection>
    </>
  );
}
