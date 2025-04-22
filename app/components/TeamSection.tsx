"use client";

import { useState } from "react";
import PageSection from "./PageSection";
import SubNavBar from "./SamePageNavigation/SubNavBar";
import TeamContent from "./TeamContent";
import teamDataJson from "../../public/JSONs/teams.json";  // Importing the JSON file

interface TeamSectionPage {
  team: string;
}

interface Team {
    name: string;
    description: string;
    responsibilities: string;
    image: string;
    Team_Leads: [[string, string, string, string]];
    members: [[string, string, string, string]];
}

type TeamData = Record<string, Team>; // map of team name to team data

const TeamSection = ({ team }: TeamSectionPage) => {
    // const teamData: TeamData = teamDataJson.sub_teams;
    let sections = ["Overview", "Responsibliites"];

    // track the active section
    const [activeSection, setActiveSection] = useState(sections[0]);

    return (
        <>
        <div className=""></div>
            <SubNavBar
            sections={sections}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            ></SubNavBar>

            {/* <TeamContent activeTab={activeSection} teamData={teamData} team={team}>
            </TeamContent> */}
        </>
    );
};

export default TeamSection;
