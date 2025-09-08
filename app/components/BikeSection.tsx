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
    let sections = ["Overview"];
    if (bikeData[bike].gallery.length > 0)
    {        sections.push("Gallery")
    } 

    // track the active section
    const [activeSection, setActiveSection] = useState(sections[0]);

    return (
        <>
            <div className="py-8 bg-black" style={{
            borderBottom: "2px solid #5e5b5b", // Top border
            width: "95%",
            margin: "0 auto",
            textAlign: "center",}}></div>
            <div className="py-4 bg-black"></div>
            <PageSection colourWay="dark">
                <section className="relative text-center">
                    <div className="relative z-10">
                        <h1 className="text-5xl text-center font-bold">{bike.toUpperCase()}</h1>
                    </div>
                </section>
                <div className="relative w-full h-96 flex-shrink-0">
                    <Image
                        src={bikeData[bike].image}
                        alt={`Image ${bike}`}
                        layout="fill"
                        objectFit="cover"
                        />
                </div>
                {/* Navigates "Overview" and "Gallery" for each Bike on the page */}
                <SubNavBar 
                        sections={sections}
                        activeSection={activeSection}
                        setActiveSection={setActiveSection}>
                </SubNavBar>
                {/* Insert BikeContent component here */}
                <BikeContent activeTab={activeSection} bikeData={bikeData} bike={bike}>
                </BikeContent>
            </PageSection>
        </>
    );
}

export default BikeSection;


