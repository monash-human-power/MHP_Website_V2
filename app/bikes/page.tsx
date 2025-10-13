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
 * Uses IntersectionObserver that tracks which section is currently on the screen
 * IntersectionObserver works by attaching an observer to each section to track
 */
export default function Page() {
    // Just stores the names of each bike in order (order might not be intentional)
    const sections: string[] = Object.keys(bikeData)
    const [activeSection, setActiveSection] = useState(sections[0]);

    // This ref is an array that stores the DOM elements (1 for each section)
    const sectionRefs = useRef<(HTMLElement | null)[]>([]); 

    // Tracks which section is in view
    useEffect(() => {
        // Each entry is an observable section that has changed since last frame
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);  // This is sectionId
                }
            })
        }

        // Determines a section to be the "activeSection" when it is 60% visible
        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.6 });

        // Attach observers to each section for the observer
        sectionRefs.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        // When component unmounts, stop observing everything
        return () => observer.disconnect()
    }, []);  // Empty array so effect runs once; the "sections" are not dynamic

    // Populates an index of the "sectionRefs" array; adds a DOM element associated for a section
    const addSectionRef = 
        (index: number) => 
        (sectionElement: HTMLElement | null): void => {
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

            {/* Nav bar at the top to show all sections */}
            <SamePageNavBar
                sections={sections}
                activeSection={activeSection}
                setActiveSection={setActiveSection}>
            </SamePageNavBar>

            {/* For each vehicle, add a BikeSection component */}
            {sections.map((bikeName, index) => (
                <div 
                    className="scroll-mt-20"
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
