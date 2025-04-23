"use client";

import { useState } from "react";
import SubNavBar from "./SamePageNavigation/SubNavBar";
import TeamContent from "./TeamContent";
import React from "react";

interface TeamSection {
    team: any;
}

const TeamSection: React.FC<TeamSection> = ({team}) => {
    let sections = ["Overview", "Responsibilities"];

    // track the active section
    const [activeSection, setActiveSection] = useState(sections[0]);
    

    return (
        <>
            <SubNavBar
            sections={sections}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            ></SubNavBar>

            <TeamContent activeTab={activeSection} team={team}></TeamContent>
        </>
    );
};

export default TeamSection;
