import Button from "../components/Buttons";
import PageSection from "../components/PageSection";
import Image from "next/image";

export default function Programs() {
  return (
    <>
      <PageSection colourWay="dark">
        <div>
          <h1 className="text-center">PROGRAMS</h1>
        </div>
      </PageSection>
      <PageSection colourWay="dark">
        <div
          style={{
            padding: "30px",
          }}
        >
          <h2 className="font-Sensation underline  decoration-green decoration-4">
            Workshops
          </h2>
        </div>
        <div
          className="grid grid-cols-2 gap-20"
          style={{
            paddingTop: "20px",
            paddingLeft: "40px",
            paddingRight: "40px",
            paddingBottom: "40px",
          }}
        >
          <div>
            <p>
              Based on the Victorian Curriculum's Cross-curriculum Priority:
              Learning about Sustainability, these hands-on STEM lessons guide
              secondary students through a systems engineering approach that
              takes into account the aerodynamic and eco-friendly aspects of
              their HPV.
            </p>
          </div>

          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Image
              src="/outreach_1.jpg"
              width="800"
              height="300"
              objectFit="cover"
              alt="Epsom Primary School"
              layout="responsive"
              style={{
                borderRadius: 30,
              }}
            />
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
