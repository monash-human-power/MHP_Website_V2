import Button from "../components/Buttons";
import PageSection from "../components/PageSection";
import Image from "next/image";
import Page from "../page";

export default function Outreach() {
  return (
    <>
      <PageSection colourWay="dark">
        <div>
          <h1 className="text-center">OUTREACH</h1>
          <div
            style={{
              padding: "30px",
            }}
          >
            <h2 className="text-center">Our Vision</h2>
          </div>

          <div
            className="text-center"
            style={{
              paddingTop: "20px",
              paddingLeft: "40px",
              paddingRight: "40px",
              paddingBottom: "20px",
            }}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
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
          <Button hrefString="/" text="Learn More" theme="dark" />
        </div>
      </PageSection>

      <div className="items-center overflow-hidden mx-auto">
        <Image
          src="/outreach_1.jpg"
          width="800"
          height="300"
          objectFit="cover"
          alt="Epsom Primary School"
          layout="responsive"
          // className="top-1/2 transform -translate-y-1/4"
        />
      </div>

      <PageSection colourWay="dark">
        <div
          style={{
            padding: "30px",
          }}
        >
          <h2 className="font-Sensation underline  decoration-green decoration-4">
            Our Program
          </h2>
        </div>
        <div
          style={{
            paddingTop: "20px",
            paddingLeft: "40px",
            paddingRight: "40px",
            paddingBottom: "40px",
          }}
        >
          <p>
            Based on the Victorian Curriculum's Cross-curriculum Priority:
            Learning about Sustainability, these hands-on STEM lessons guide
            secondary students through a systems engineering approach that takes
            into account the aerodynamic and eco-friendly aspects of their HPV.
          </p>
        </div>
        <div
          className="flex flex-row justify-center items-center"
          style={{
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <Button hrefString="/programs" text="See Options" theme="dark" />
        </div>
      </PageSection>

      <div className="items-center overflow-hidden">
        <Image
          src="/outreach_2.jpg"
          width="800"
          height="300"
          objectFit="cover"
          alt="Robogals Engage Engineer"
          layout="responsive"
          // className="transform -translate-y-1/4"
        />
      </div>

      <PageSection colourWay="dark">
        <div>
          <h2 className="text-center font-Sensation underline  decoration-green decoration-4">
            Testimonials
          </h2>
          <div
            className="grid grid-cols-2 gap-20"
            style={{
              paddingTop: "50px",
            }}
          >
            <div className="text-center">
              <p>
                "The kids loved it and the others that missed out were super
                jealous!"
                <br></br>- STEM Teacher at Westall Secondary College
              </p>
            </div>
            <div className="text-center">
              <p>
                "It was really fun! Had a blast being creative while teaching
                important STEM skills."
                <br></br>- Blake Haydon (MHP member)
              </p>
            </div>
          </div>
        </div>
      </PageSection>
      <PageSection colourWay="dark">
        <div
          style={{
            borderTop: "2px solid #B3B3B3", // Top border
            borderBottom: "2px solid #B3B3B3", // Bottom border
            width: "90%",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              padding: "30px",
            }}
          >
            <h2 className="text-center font-Sensation underline  decoration-green decoration-4">
              Find out more
            </h2>
          </div>
          <div
            className="text-center"
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
            <Button hrefString="/contact" text="Contact Us" theme="dark" />
          </div>
        </div>
      </PageSection>
    </>
  );
}
