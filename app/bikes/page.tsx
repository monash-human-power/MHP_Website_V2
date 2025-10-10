"use client"

import React, { useState, useEffect, useRef} from 'react'

import PageSection from "../components/PageSection";
import BikeSection from '../components/BikeSection';
import SamePageNavBar from '../components/SamePageNavigation/SamePageNavBar';

import bikeData from "../../public/JSONs/bikes.json";  // Importing the JSON file

/**
 * @documentation
 * The Bike page
 * Made up of "sections" where each bike has a section
 * Has a scroll progress feature that tracks which section is currently on the screen
 */
export default function Page() {
    // Just stores the names of each bike in order (order might not be intentional)
    const sections: string[] = Object.keys(bikeData)
    const [activeSection, setActiveSection] = useState(sections[0]);

    // This ref is an array that stores the DOM elements (1 for each section)
    const sectionRefs = useRef<(HTMLElement | null)[]>([]); 

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
    }, [sectionRefs.current]);

    // Populates the "sectionRefs" array; adds a DOM element associated for a section
    const addSectionRef = 
        (index: number) => 
        (sectionElement: HTMLElement | null) => {
            sectionRefs.current[index] = sectionElement
    }

    return (
    <>
        <title>
            Bikes | MHP
        </title>
        <div className="scroll-smooth">
            <PageSection colourWay="dark">
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

            <SamePageNavBar
                sections={sections}
                activeSection={activeSection}
                setActiveSection={setActiveSection}>
            </SamePageNavBar>

            {/* For each vehicle, add a BikeSection component */}
            {sections.map((bikeName, index) => (
                <div 
                    key={bikeName}
                    id={bikeName}
                    ref={addSectionRef(index)}
                >
                    <BikeSection key={bikeName} bike={bikeName}></BikeSection>
                </div>
            ))}
        </div>
    </>
    );
}
