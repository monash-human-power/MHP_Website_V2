"use client";
import { useState } from "react";
import Button from "../components/Buttons";
import PageSection from "../components/PageSection";
import Image from "next/image";
import programData from "../../public/JSONs/programs.json"; // Importing the JSON file

export default function Outreach() {
  const [currentProgramIndex, setCurrentProgramIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("animate-fadeIn");

  // Functions to handle next/prev program navigation
  const nextProgram = () => {
    setFadeClass("animate-fadeOut");
    setTimeout(() => {
      setCurrentProgramIndex(
        (prevIndex) => (prevIndex + 1) % programData.programs.length
      );
      setFadeClass("animate-fadeIn");
    }, 300); // Match the duration with the animation
  };

  const prevProgram = () => {
    setFadeClass("animate-fadeOut");
    setTimeout(() => {
      setCurrentProgramIndex((prevIndex) =>
        prevIndex === 0 ? programData.programs.length - 1 : prevIndex - 1
      );
      setFadeClass("animate-fadeIn");
    }, 300); // Match the duration with the animation
  };

  const currentProgram = programData.programs[currentProgramIndex];

  return (
    <>
      <title>
        Outreach | MHP
      </title>
      {/* Our Vision Section */}
      <PageSection colourWay="dark">
        <div>
          <h1 className="text-center text-5xl">Outreach</h1>
          <div
            style={{
              padding: "30px",
            }}
          >
            <h2 className="text-center text-3xl font-Sensation underline decoration-green decoration-4">
              Our Vision
            </h2>
          </div>
          <div
            style={{
              paddingTop: "20px",
              paddingBottom: "20px",
              width: "90%",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <p className="text-xl">
              Monash Human Power (MHP) is committed to sharing their passion for
              engineering and innovation through an enriching school outreach
              program. Tailored for students of various age groups, these
              workshops offer hands-on learning experiences that bring STEM
              (Science, Technology, Engineering, and Mathematics) to life in
              exciting and practical ways.
            </p>
          </div>
        </div>
        <div
          className="flex flex-row justify-center items-center"
          style={{
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          {/* Learn More button links to Our Programs section */}
          <Button hrefString="#ourPrograms" text="Learn More" theme="dark" target=""/>
        </div>
      </PageSection>

      {/* Epsom Primary School */}
      <section className="relative text-center py-5 animate-fadeIn">
        <div className="items-center overflow-hidden mx-auto">
          <Image
            src="/images/outreach_page/outreach_1.jpg"
            width="800"
            height="300"
            objectFit="cover"
            alt="Epsom Primary School"
            layout="responsive"
            // className="top-1/2 transform -translate-y-1/4"
          />
        </div>
        <section id="ourPrograms"></section>
      </section>

      {/* Our Programs section */}
      <PageSection colourWay="dark">
        <div
          style={{
            paddingTop: "40px",
            paddingBottom: "20px",
            width: "90%",
            margin: "0 auto",
          }}
        >
          <h2 className="text-3xl font-Sensation underline decoration-green decoration-4">
            Our Programs
          </h2>
        </div>
        <div
          className="flex justify-center items-center"
          style={{
            paddingTop: "20px",
            paddingBottom: "20px",
            width: "90%",
            margin: "0 auto",
          }}
        >
          <button
            onClick={prevProgram}
            className="z-10 p-4 bg-gray-300 rounded-full hover:bg-gray-400 text-4xl w-16 h-16 flex items-center justify-center"
          >
            &larr;
          </button>
          <h2 className="text-3xl font-bold mx-8">{currentProgram.name}</h2>
          <button
            onClick={nextProgram}
            className="z-10 p-4 bg-gray-300 rounded-full hover:bg-gray-400 text-4xl w-16 h-16 flex items-center justify-center"
          >
            &rarr;
          </button>
        </div>

        {/* Dynamic Program Section */}
        <div
          className="items-center"
          style={{
            paddingTop: "40px",
            paddingBottom: "20px",
            width: "90%",
            margin: "0 auto",
          }}
        >
          <div className="flex flex-col lg:flex-row lg:space-x-8 px-8">
            {/* Image */}
            <div className="mx-auto lg:w-1/2">
              <div className={`transition-opacity duration-300 ${fadeClass}`}>
                <Image
                  src={currentProgram.image} // Dynamically load the image from JSON
                  alt={currentProgram.name}
                  width={600}
                  height={800}
                  className="rounded-3xl"
                />
              </div>
            </div>

            {/* Description */}
            <div className="mt-2 lg:mt-0 lg:w-1/2  py-10 lg:py-0">
              <div className={`transition-opacity duration-300 ${fadeClass}`}>
                <p className="text-xl sm:text-justify">
                  {currentProgram.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Wind Tunnel Model Image */}
      <section className="relative text-center py-5 animate-fadeIn">
        <div className="items-center overflow-hidden">
          <Image
            src="/images/outreach_page/outreach_2.jpg"
            width="800"
            height="300"
            objectFit="cover"
            alt="Wind Tunnel Model Image"
            layout="responsive"
            // className="transform -translate-y-1/4"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <PageSection colourWay="dark">
        <div>
          <h2 className="text-center text-3xl font-Sensation underline decoration-green decoration-4">
            Testimonials
          </h2>
          <div
            className="text-center text-xl grid grid-cols-1 grid-rows-2 gap-y-10 lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-20"
            style={{
              paddingTop: "40px",
              paddingLeft: "10%",
              paddingRight: "10%",
            }}
          >
            <div className="max-w-screen-xl mx-auto text-center grid lg:col-start-1 lg:row-start-1 lg:col-span-1">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p>
                    &quot;The kids loved it and the others that missed out were
                    super jealous!&quot;
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <div className="flex items-center divide-x-2">
                    <div className="pr-3 font-medium">STEM Teacher</div>
                    <div className="pl-3 text-sm font-light">
                      Westall Secondary College
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>

            <div className="max-w-screen-xl mx-auto text-center grid lg:col-start-2 lg:row-start-2 lg:col-span-1">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p>
                    &quot;It was really fun! Had a blast being creative while
                    teaching important STEM skills.&quot;
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <div className="flex items-center divide-x-2">
                    <div className="pr-3 font-medium">Blake Haydon</div>
                    <div className="pl-3 text-sm font-light">MHP member</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Epsom Primary School */}
      <section className="relative text-center py-5 animate-fadeIn">
        <div className="items-center overflow-hidden mx-auto">
          <Image
            src="/images/outreach_page/outreach_3.jpg"
            width="800"
            height="300"
            objectFit="cover"
            alt="Epsom Primary School"
            layout="responsive"
          />
        </div>
      </section>

      {/* Find Out More Section */}
      <PageSection colourWay="dark">
        <div
          style={{
            // borderTop: "2px solid #B3B3B3", // Top border
            borderBottom: "2px solid #B3B3B3", // Bottom border
            width: "90%",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={
              {
                // padding: "40px",
              }
            }
          >
            <h2 className="text-center text-3xl font-Sensation underline decoration-green decoration-4">
              Find out more!
            </h2>
          </div>
          <div
            className="text-center text-xl"
            style={{
              padding: "20px",
            }}
          >
            Learn more about our workshops or contact us for general inquiries.
          </div>
          <div
            className="flex flex-row justify-center items-center"
            style={{
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <Button hrefString="/contact" text="Contact Us" theme="dark" target="" />
          </div>
        </div>
      </PageSection>
    </>
  );
}
