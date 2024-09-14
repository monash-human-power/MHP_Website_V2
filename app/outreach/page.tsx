import Button from "../components/Buttons";
import PageSection from "../components/PageSection";
import Image from "next/image";

export default function Outreach() {
  return (
    <>
      {/* Our Vision Section */}
      <PageSection colourWay="dark">
        <div>
          <h1 className="text-center text-5xl font-bold">OUTREACH</h1>
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
          <Button hrefString="#ourPrograms" text="Learn More" theme="dark" />
        </div>

        {/* Epsom Primary School */}
      </PageSection>
      <section className="relative text-center py-5 animate-fadeIn">
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
        <section id="ourPrograms"></section>
      </section>

      {/* Our Programs section */}
      <PageSection colourWay="dark">
        <div
          style={{
            paddingTop: "20px",
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
          className="text-xl"
          style={{
            paddingTop: "20px",
            paddingBottom: "20px",
            width: "90%",
            margin: "0 auto",
          }}
        >
          <p>
            Our programs cover core concepts in areas like aerodynamics,
            mechanical design, and rider development—each offering a unique
            glimpse into the real-world applications of STEM.
          </p>
          <br></br>
          <p>
            For example, in the Aerodynamics Workshop, students learn how
            airflow impacts speed and efficiency by designing and testing their
            own aerodynamic models in a mini wind tunnel. They experiment with
            different shapes, gaining insights into how engineers use
            aerodynamics to create faster, more efficient vehicles.
          </p>
          <br></br>
          <p>
            The Rider Development Workshop introduces students to the science
            behind human-powered racing, teaching them how to maximise energy
            output and optimise race strategies through gear changes and racing
            line techniques.
          </p>
          <br></br>
          <p>
            Through these workshops, MHP makes STEM approachable and engaging
            for younger students, showing them how mathematics, physics, and
            engineering can solve real-world challenges. By offering interactive
            design sessions and testing phases, MHP gives students the chance to
            apply their creativity, learn problem-solving skills, and experience
            the thrill of innovation firsthand. These outreach efforts not only
            spark curiosity but also help build a pipeline of future engineers,
            scientists, and innovators.
          </p>
          <br></br>
          <p>
            You can enquire here to organise a workshop with your own school.
          </p>
        </div>
        <div
          className="flex flex-row justify-center items-center"
          style={{
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          {/* See Options button links to separate Programs page */}
          <Button hrefString="/programs" text="See Options" theme="dark" />
        </div>
      </PageSection>

      {/* Wind Tunnel Model Image */}
      <section className="relative text-center py-5 animate-fadeIn">
        <div className="items-center overflow-hidden">
          <Image
            src="/outreach_2.jpg"
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
            className="text-center text-xl grid grid-cols-2 gap-20"
            style={{
              paddingTop: "40px",
              paddingLeft: "10%",
              paddingRight: "10%",
            }}
          >
            <div>
              <p>
                "The kids loved it and the others that missed out were super
                jealous!"
                <br></br>- STEM Teacher at Westall Secondary College
              </p>
            </div>
            <div>
              <p>
                "It was really fun! Had a blast being creative while teaching
                important STEM skills."
                <br></br>- Blake Haydon (MHP member)
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Find Out More Section */}
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
              padding: "40px",
            }}
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
            <Button hrefString="/contact" text="Contact Us" theme="dark" />
          </div>
        </div>
      </PageSection>
    </>
  );
}
