import Button from "../components/Buttons";
import PageSection from "../components/PageSection";
import Image from "next/image";


export default function Outreach() {
    return (
    <>
        <PageSection colourWay="dark">
            <div>
                <h1 className="text-center">
                    OUTREACH
                </h1>
                <br></br>
                <h2 className="text-center">
                    Our Vision
                </h2>
                <br></br>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
            <br></br>
            <div className="flex flex-row justify-center items-center">
                <Button hrefString="/" text="Learn More" theme="dark"/>
            </div>
            <br></br>
            <div className="relative w-full h-100 overflow-hidden">
                <Image src="/outreach_1.jpg" width={1000} height={200} alt="Epsom Primary School" layout="responsive"/>
            </div>
        </PageSection>



        <PageSection colourWay="light">
        <div>
            <h2 className="font-Sensation underline  decoration-purple decoration-4">
                OUR PROGRAM
            </h2>
        </div>
        <p>
            Based on the Victorian Curriculum's Cross-curriculum Priority: Learning about Sustainability, 
            these hands-on STEM lessons guide secondary students through a systems engineering approach 
            that takes into account the aerodynamic and eco-friendly aspects of their HPV.
        </p>
        <br></br>
        <div className="flex flex-row justify-center items-center">
            <Button hrefString="/" text="See Options" theme="light"/>
        </div>
        <br></br>
        </PageSection>
    </>
    );
}
