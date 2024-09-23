"use client"

import React, {useState} from 'react'
import Image from "next/image";

import PageSection from './PageSection';
import SubNavBar from "./SamePageNavigation/SubNavBar";
import BikeContent from './BikeContent';

import bikeDataJson from "../../public/JSONs/bikes.json";  // Importing the JSON file

interface BikeSectionProps {
    bike: string
}

interface Bike {
    image: string;
    iteration: number;
    max_speed: number;
    development_start: number;
    development_end: number | string; // to allow "current"
    competitions: string[];
    description: string;
    gallery: string[];
}

type BikeData = Record<string, Bike>; // map of bike name to bike data

const BikeSection = ({bike} : BikeSectionProps) => {
    const bikeData: BikeData = bikeDataJson;
    
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
                <div className="relative w-full h-64">
                <Image
                    src={bikeData[bike].image}
                    alt={`Image ${bike}`}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
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