"use client"

import React, {useState} from 'react'
import PageSection from './PageSection';
import SubNavBar from "./SamePageNavigation/SubNavBar";
import BikeContent from './BikeContent';

import bikeData from "../../public/JSONs/bikes.json";  // Importing the JSON file

interface BikeSectionProps {
    bike: string
}

const BikeSection = ({bike} : BikeSectionProps) => {
    const sections = ["Overview", "Gallery"];

    // track the active section
    const [activeSection, setActiveSection] = useState(sections[0]);

    return (
        <>
            <PageSection colourWay="dark">
                <section className="relative text-center">
                    <div className="relative z-10">
                        <h1 className="text-5xl font-bold">{bike}</h1>
                    </div>
                </section>
                {/* Insert bike image here */}
                <SubNavBar 
                        sections={sections}
                        activeSection={activeSection}
                        setActiveSection={setActiveSection}>
                </SubNavBar>
                {/* Insert BikeContent component here */}
            </PageSection>
        </>
    );
};

export default BikeSection;