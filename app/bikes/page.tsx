import React, {use, useState} from 'react'

import PageSection from "../components/PageSection";
import SubNavBar from "../components/SamePageNavigation/SubNavBar";

import bikeData from "../../public/JSONs/bikes.json";  // Importing the JSON file

export default function Page() {
    const sections = bikeData.map((vehicle, key) => (vehicle.name))

    // track the active section
    //const [activeSection, setActiveSection] = useState

    return (
        <>
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
            {/* <SubNavBar {vehicles, }></SubNavBar> */}
            <div>
                {
                    bikeData?.map((vehicle, index) => (
                        <div>
                            {vehicle.name}
                        </div>
                    ))
                }
            </div>
        </>
    );
}
