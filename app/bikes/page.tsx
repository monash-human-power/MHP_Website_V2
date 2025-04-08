"use client"

import React, {use, useState, useEffect, useRef} from 'react'

import PageSection from "../components/PageSection";
import BikeSection from '../components/BikeSection';
import SamePageNavBar from '../components/SamePageNavigation/SamePageNavBar';

import bikeData from "../../public/JSONs/bikes.json";  // Importing the JSON file

export default function Page() {
    const sections = Object.keys(bikeData)
    // track the active section
    const [activeSection, setActiveSection] = useState(sections[0]);

    const sectionRefs = useRef<(HTMLElement | null)[]>([]); // To store refs to the sections

    // IntersectionObserver logic to track which section is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                setActiveSection(sectionId); // Update active section based on scrolling
            }
            });
        },
        { threshold: 0.6 } // Adjust this value to trigger earlier/later
        );

        // Attach observers to each section
        sectionRefs.current.forEach((section) => {
        if (section) observer.observe(section);
        });

        // Clean up observer on component unmount
        return () => {
        sectionRefs.current.forEach((section) => {
            if (section) observer.unobserve(section);
        });
        };
    }, []);

    return (
    <>
      <title>
            Bikes | MHP
        </title>
        <div className="scroll-smooth">
            <PageSection >
                <section className="relative text-center">
                    <div className="relative z-10">
                        <h1 className="text-5xl sm:text-3xl md:text-5xl ">Our Bikes</h1>
                        <h2 className="text-lg sm:text-xl md:text-2xl mt-2 mx-4">
                        Monash Human Power (MHP) has continuously pushed the boundaries of human-powered 
                        vehicle design with our innovative range of bikes and our trike. Each of our models 
                        represents a unique step forward in engineering and performance, embodying our 
                        commitment to speed, efficiency, and sustainability. From breaking records on the 
                        world stage to exploring new vehicle types, our collection showcases the evolution 
                        of cutting-edge technology and design.
                        </h2>
                    </div>
                </section>  
            </PageSection>
            <SamePageNavBar sections={sections} activeSection={activeSection}
                        setActiveSection={setActiveSection}></SamePageNavBar>
            {/* For each vehicle, add a BikeSection component */}
            {Object.keys(bikeData).map(bikeName => (
                <div key={bikeName} id={bikeName}>
                    <BikeSection key={bikeName} bike={bikeName}></BikeSection>
                </div>
            ))}
        </div>
        </>
    );
}
