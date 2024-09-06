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
                <div style={{
                    padding: '30px'
                }}>
                    <h2 className="text-center">
                        Our Vision
                    </h2>
                </div>

                <div style={{
                    padding: '20px'
                }}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>  
            </div>
            <br></br>
            <div className="flex flex-row justify-center items-center">
                <Button
                    hrefString="/"
                    text="Learn More"
                    theme="dark"
                />
            </div>
        </PageSection>

        <div className="max-h-80 items-center overflow-hidden">
            <Image
                src="/outreach_1.jpg"
                width="800"
                height="300"
                objectFit="cover"
                alt="Epsom Primary School"
                layout="responsive"
                className="top-1/2 transform -translate-y-1/4"
            />
        </div>

        <PageSection colourWay="dark">
            <div>
                <h2 className="font-Sensation underline  decoration-green decoration-4">
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
                <Button
                    hrefString="/"
                    text="See Options"
                    theme="dark"
                />
            </div>
            <br></br>
        </PageSection>

        <div className="max-h-80 items-center overflow-hidden">
            <Image
                src="/outreach_2.jpg"
                width="800"
                height="300"
                objectFit="cover"
                alt="Robogals Engage Engineer"
                layout="responsive"
                className="transform -translate-y-1/4"
            />
        </div>

        <PageSection colourWay="dark">
        <div 
            style={{
            paddingTop: '20px',
            paddingBottom: '50px',
            margin: '0 auto',
            textAlign: 'center'
            }}>
            <h2 className="text-center font-Sensation underline  decoration-green decoration-4">
                TESTIMONIALS
            </h2>
            <br></br>
            <div className="grid grid-cols-2 gap-20">
                <div className="text-left">
                    <p>
                        "The kids loved it and the others that missed out were super jealous!"
                        <br></br>
                        - STEM Teacher at Westall Secondary College
                    </p>
                </div>
                <div className="text-left">
                    <p>
                        "It was really fun! Had a blast being creative while teaching important STEM skills."
                        <br></br>
                        - Blake Haydon (MHP member)
                    </p>
                </div>
                
            </div>
        </div>
        <br></br>
        <br></br>

        <div style={{
            borderTop: '2px solid #B3B3B3',  // Top border
            borderBottom: '2px solid #B3B3B3', // Bottom border
            padding: '70px',
            width: '90%',
            margin: '0 auto',
            textAlign: 'center'
            }}>

            <Button
                hrefString="/contact"
                text="Contact Us"
                theme="dark"
            />
        </div>
        <br></br>
        </PageSection>
    </>
    );
}
