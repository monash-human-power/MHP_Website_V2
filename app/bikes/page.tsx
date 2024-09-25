import React, {use, useState} from 'react'

import PageSection from "../components/PageSection";
import BikeSection from '../components/BikeSection';
import SamePageNavBar from '../components/SamePageNavigation/SamePageNavBar';

import bikeData from "../../public/JSONs/bikes.json";  // Importing the JSON file

export default function Page() {
    return (
        <div className="scroll-smooth">
            <PageSection colourWay="dark">
                <section className="relative text-center">
                    <div className="relative z-10">
                        <h1 className="text-5xl font-bold">Our bikes</h1>
                        <h2 className="mt-2 mx-20">
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
            <SamePageNavBar sections={Object.keys(bikeData)}></SamePageNavBar>
            {/* For each vehicle, add a BikeSection component */}
            {Object.keys(bikeData).map(bikeName => (
                <div key={bikeName} id={bikeName}>
                    <BikeSection key={bikeName} bike={bikeName}></BikeSection>
                </div>
            ))}
        </div>
    );
}
