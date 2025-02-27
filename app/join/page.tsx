"use client";
import PageSection from "../components/PageSection";
import Image from "next/image";

export default function Join() {
  return (
    <>
      <title>
        Join | MHP
      </title>
      
      {/* Cover Image */}
      <section className="animate-fadeIn">
        <Image
          src="/images/join_page/join_main.jpg"
          width="5184"
          height="2309"
          objectFit="cover"
          alt="Trike Group photo"
          layout="responsive"
        />
      </section>

      {/* Join Us section */}
      <PageSection colourWay="dark">
        <div className="text-center">
          <h1 className="text-center text-5xl">
            Join Us
          </h1>
          <div
            className="text-xl"
            style={{
              paddingTop: "40px",
              paddingBottom: "20px",
              width: "60%",
              margin: "0 auto",
            }}
          >
            <p>Applications are open.</p>
            <br></br>
            <p>
              Fill out an expression of interest and sign up to our mailing
              list!
            </p>
            <br></br>
            <p>
              If you have any further questions or queries, feel free to direct
              them to monashhpt@gmail.com
            </p>
          </div>
        </div>
        <div
          className="text-center text-xl lg:text-3xl"
          style={{
            paddingTop: "40px",
            paddingBottom: "20px",
          }}
        >
          {/* Expression of Interest button links to Google Form */}
          <a href="https://forms.gle/Ek9e9jvtd57NLrRM9" target="_blank">
            <button className="px-4 py-2 lg:px-16 lg:py-2 rounded-full border-2 bg-green text-black border-black hover:bg-black hover:text-white hover:border-white">
              Application Form
            </button>
          </a>
        </div>
      </PageSection>

      {/* Rider Development section */}
      <PageSection colourWay="dark">
        <div
          style={{
            borderTop: "2px solid #5e5b5b", // Top border
            width: "90%",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              paddingTop: "40px",
              paddingLeft: "5%",
            }}
          >
            <h2 className="text-left font-semibold text-3xl font-Sansation underline decoration-green decoration-4">
              Rider Development
            </h2>
          </div>
          <div
            className="text-left font-Sansation text-xl grid lg:grid-cols-2 gap-20"
            style={{
              paddingTop: "40px",
              paddingBottom: "60px",
              paddingLeft: "5%",
              paddingRight: "5%",
            }}
          >
            <div>
              <p>
                The Rider Development subteam focuses on maximising rider
                performance. Comprised of riders and technical members, they
                arrange cycling and strength training, develop personal power
                plans, and organise competency training for recumbent bikes.
                They also coordinate testing days at the Holden and Ford Proving
                Grounds.
              </p>
            </div>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                margin: "0 auto",
                maxWidth: "40%",
                objectFit: "contain",
              }}
            >
              <Image
                src="/images/join_page/join_rider_dev.jpg"
                width="200"
                height="100"
                objectFit="cover"
                alt="Join Rider Development"
                layout="responsive"
                style={{
                  borderRadius: 30,
                }}
              />
            </div>
          </div>

          <div
            className="text-left text-xl grid lg:grid-cols-2 gap-20"
            style={{
              paddingLeft: "5%",
              paddingRight: "5%",
            }}
          >
            <div>
              <h2 className="text-left text-2xl font-Sansation underline decoration-green decoration-4">
                Responsible For
              </h2>
              <br></br>
              <li className="font-Sansation">
                Collaborate with riders to enhance performance through movement
                analysis, customised training, and technique optimisation.
              </li>
              <br></br>
              <li className="font-Sansation">
                Plan and execute high-speed events and velodrome sessions,
                including researching new event opportunities and managing
                engagement.
              </li>
              <br></br>
              <li className="font-Sansation">
                Develop and implement racing strategies by analysing data, track
                conditions, and conducting post-race evaluations for continuous
                improvement.
              </li>
            </div>
            <div>
              <h2 className="text-left text-2xl font-Sansation underline decoration-green decoration-4">
                Key Skills
              </h2>
              <br></br>
              <li className="font-Sansation">
                Strong physical and mental fitness, with a background or keen
                interest in cycling, biomechanics, and training theory.
              </li>
              <br></br>
              <li className="font-Sansation">
                Proven experience in event organisation, problem-solving, and
                adaptability during events, with excellent communication and
                interpersonal skills.
              </li>
              <br></br>
              <li className="font-Sansation">
                Passion for competitive high-speed racing, with strong
                analytical, problem-solving, and teamwork abilities.
              </li>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Aerodynamics section */}
      <PageSection colourWay="dark">
        <div
          style={{
            borderTop: "2px solid #5e5b5b", // Top border
            width: "90%",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              paddingTop: "40px",
              paddingRight: "5%",
            }}
          >
            <h2 className="text-left lg:text-right text-3xl font-Sansation underline decoration-green decoration-4">
              Aerodynamics
            </h2>
          </div>
          <div
            className="text-left lg:text-right text-xl grid lg:grid-cols-2 gap-20"
            style={{
              paddingTop: "40px",
              paddingBottom: "60px",
              paddingLeft: "5%",
              paddingRight: "5%",
            }}
          >
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                margin: "0 auto",
                maxWidth: "70%",
                objectFit: "contain",
              }}
            >
              <Image
                src="/images/join_page/join_aerodynamics.jpg"
                width="800"
                height="300"
                objectFit="cover"
                alt="Join Aerodynamics"
                layout="responsive"
                style={{
                  borderRadius: 30,
                }}
              />
            </div>
            <div>
              <p className="font-Sansation">
                The Aerodynamics subteam at MHP designs and tests aerodynamic
                components like the external shell and wheel covers to reduce
                drag and increase bike speed. They use computational fluid
                dynamics (CFD) and experimental testing in the Monash Wind
                Tunnel to make design choices that enhance bike performance.
              </p>
            </div>
          </div>

          <div
            className="text-left text-xl grid lg:grid-cols-2 gap-20"
            style={{
              paddingLeft: "5%",
              paddingRight: "5%",
            }}
          >
            <div>
              <h2 className="text-left text-2xl font-Sansation underline decoration-green decoration-4">
                Responsible For
              </h2>
              <br></br>
              <li className="font-Sansation">
                Work with aerodynamics principles to enhance bike performance
                through testing, design, and manufacturing.
              </li>
              <br></br>
              <li className="font-Sansation">
                Gain hands-on experience using the Monash Wind Tunnel, CFD, and
                aerodynamic component testing.
              </li>
              <br></br>
              <li className="font-Sansation">
                Create, test, and troubleshoot CAD models in NX and ANSYS
                Fluent, while upskilling other team members.
              </li>
            </div>
            <div>
              <h2 className="text-left text-2xl font-Sansation underline decoration-green decoration-4">
                Key Skills
              </h2>
              <br></br>
              <li className="font-Sansation">
                Strong understanding of aerodynamics, CFD simulations, and
                experience with ANSYS Fluent, Spaceclaim, or DesignModeler.
              </li>
              <br></br>
              <li className="font-Sansation">
                Proficiency in CAD software, especially NX and SolidWorks, with
                an interest in 3D printing for prototyping.
              </li>
              <br></br>
              <li className="font-Sansation">
                Ability to self-assess CFD results and refine models for
                accurate simulations.
              </li>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Chassis and Drivetrain section */}
      <PageSection colourWay="dark">
        <div
          style={{
            borderTop: "2px solid #5e5b5b", // Top border
            width: "90%",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              paddingTop: "40px",
              paddingLeft: "5%",
            }}
          >
            <h2 className="text-left text-3xl font-Sansation underline decoration-green decoration-4">
              Chassis and Drivetrain
            </h2>
          </div>
          <div
            className="text-left text-xl grid lg:grid-cols-2 gap-20"
            style={{
              paddingTop: "40px",
              paddingBottom: "60px",
              paddingLeft: "5%",
              paddingRight: "5%",
            }}
          >
            <div>
              <p className="font-Sansation">
                The Chassis & Drivetrain subteam designs and manufactures all
                mechanical components, including the chassis and moving parts.
                They model components using CAD software and verify their
                strength through FEA testing or hand calculations. The team uses
                Monash University resources for manufacturing, employing
                techniques like welding, grinding, drilling, and turning.
              </p>
            </div>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                margin: "0 auto",
                maxWidth: "70%",
                objectFit: "contain",
              }}
            >
              <Image
                src="/images/join_page/join_chassis_drivetrain.jpg"
                width="800"
                height="300"
                objectFit="cover"
                alt="Join Chassis and Drivetrain"
                layout="responsive"
                style={{
                  borderRadius: 30,
                }}
              />
            </div>
          </div>

          <div
            className="text-left text-xl grid lg:grid-cols-2 gap-20"
            style={{
              paddingLeft: "5%",
              paddingRight: "5%",
            }}
          >
            <div>
              <h2 className="text-left text-2xl font-Sansation underline decoration-green decoration-4">
                Responsible For
              </h2>
              <br></br>
              <li className="font-Sansation">
                Design and test the vehicle chassis, focusing on space-frame
                structures with potential future use of composite materials.
              </li>
              <br></br>
              <li className="font-Sansation">
                Develop strong CAD skills and deep understanding of chassis
                engineering principles.
              </li>
              <br></br>
              <li className="font-Sansation">
                Optimise and integrate drivetrain components, leveraging cycling
                knowledge and collaborating with component engineers.
              </li>
            </div>
            <div>
              <h2 className="text-left text-2xl font-Sansation underline decoration-green decoration-4">
                Key Skills
              </h2>
              <br></br>
              <li className="font-Sansation">
                Strong CAD and FEA skills, with an interest in vehicular frame
                design and prototyping to test solutions.
              </li>
              <br></br>
              <li className="font-Sansation">
                Solid understanding of materials mechanics and structural
                mechanics.
              </li>
              <br></br>
              <li className="font-Sansation">
                Comprehensive knowledge of bicycle drivetrains, with experience
                in working with and maintaining them.
              </li>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Operations section */}
      <PageSection colourWay="dark">
        <div
          style={{
            borderTop: "2px solid #5e5b5b", // Top border
            width: "90%",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              paddingTop: "40px",
              paddingRight: "5%",
            }}
          >
            <h2 className="text-left lg:text-right text-3xl font-Sansation underline decoration-green decoration-4">
              Operations
            </h2>
          </div>
          <div
            className="text-left lg:text-right text-xl grid lg:grid-cols-2 gap-20"
            style={{
              paddingTop: "40px",
              paddingBottom: "60px",
              paddingLeft: "5%",
              paddingRight: "5%",
            }}
          >
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                margin: "0 auto",
                maxWidth: "70%",
                objectFit: "contain",
              }}
            >
              <Image
                src="/images/join_page/join_operations.jpg"
                width="800"
                height="300"
                objectFit="cover"
                alt="Join Operations"
                layout="responsive"
                style={{
                  borderRadius: 30,
                }}
              />
            </div>
            <div>
              <p className="font-Sansation">
                The Operations subteam engages external stakeholders,
                coordinates with sponsors, and markets MHP activities. They
                organise events like the &quot;Build a HPV&quot; school outreach
                program, promote STEM pathways, and support the technical
                team&apos;s bike manufacturing. They are also involved in
                graphic design and branding for MHP.
              </p>
            </div>
          </div>

          <div
            className="text-left text-xl grid lg:grid-cols-2 gap-20"
            style={{
              paddingLeft: "5%",
              paddingRight: "5%",
            }}
          >
            <div>
              <h2 className="text-left text-2xl font-Sansation underline decoration-green decoration-4">
                Responsible For
              </h2>
              <br></br>
              <li className="font-Sansation">
                Identify and manage sponsorships by researching potential
                sponsors, maintaining relationships, and negotiating agreenents.
              </li>
              <br></br>
              <li className="font-Sansation">
                Produce and plan media content, including photoshoots and
                videos, to effectively communicate the brand message and align
                with company values.
              </li>
              <br></br>
              <li className="font-Sansation">
                Create, manage, and optimise engaging content across platforms
                and social media, including editing footage and developing
                design concepts to enhance brand presence.
              </li>
            </div>
            <div>
              <h2 className="text-left text-2xl font-Sansation underline decoration-green decoration-4">
                Key Skills
              </h2>
              <br></br>
              <li className="font-Sansation">
                Experience in sponsorship management is a plus, though not
                necessary.
              </li>
              <br></br>
              <li className="font-Sansation">
                Proficiency in multimedia software (Adobe Creative Suite,
                CapCut) and social media posting, with past experience in
                photography/videography.
              </li>
              <br></br>
              <li className="font-Sansation">
                Strong communication skills, ability to work collaboratively
                with marketing teams, and a proactive, eager-to-learn attitude.
              </li>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Electrical section */}
      <PageSection colourWay="dark">
        <div
          style={{
            borderTop: "2px solid #5e5b5b", // Top border
            width: "90%",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              paddingTop: "40px",
              paddingLeft: "5%",
            }}
          >
            <h2 className="text-left text-3xl font-Sansation underline decoration-green decoration-4">
              Electrical
            </h2>
          </div>
          <div
            className="text-left text-xl grid lg:grid-cols-2 gap-20"
            style={{
              paddingTop: "40px",
              paddingBottom: "60px",
              paddingLeft: "5%",
              paddingRight: "5%",
            }}
          >
            <div>
              <p className="font-Sansation">
                The Electrical subteam manages the bike&apos;s electrical and
                software systems, including the camera and data acquisition
                systems that enhance rider safety and performance. With no
                windows on the fairing, the rider relies on these systems to
                monitor surroundings. The setup includes Raspberry Pis,
                microcontrollers, and sensors, along with custom software for
                recording and analysing performance data from field tests.
              </p>
            </div>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                margin: "0 auto",
                maxWidth: "70%",
                objectFit: "contain",
              }}
            >
              <Image
                src="/images/join_page/join_electrical.jpg"
                width="800"
                height="300"
                objectFit="cover"
                alt="Join Electrical"
                layout="responsive"
                style={{
                  borderRadius: 30,
                }}
              />
            </div>
          </div>

          <div
            className="text-left text-xl grid lg:grid-cols-2 gap-20"
            style={{
              paddingLeft: "5%",
              paddingRight: "5%",
            }}
          >
            <div>
              <h2 className="text-left text-2xl font-Sansation underline decoration-green decoration-4">
                Responsible For
              </h2>
              <br></br>
              <li className="font-Sansation">
                Design, simulate, and document circuitry, including PCB
                manufacturing and programming microcontrollers like Raspberry Pi
                for sensor control.
              </li>
              <br></br>
              <li className="font-Sansation">
                Develop and maintain a React-powered web app and various Python
                projects, including physical modeling and data processing.
              </li>
              <br></br>
              <li className="font-Sansation">
                Troubleshoot systems during testing and ensure thorough
                documentation of code, APIs, and pull requests.
              </li>
            </div>
            <div>
              <h2 className="text-left text-2xl font-Sansation underline decoration-green decoration-4">
                Key Skills
              </h2>
              <br></br>
              <li className="font-Sansation">
                Experience with microcontrollers (Arduino, Raspberry Pi) and
                programming in C or Python, with an interest in circuit/PCB
                design and 3D printing.
              </li>
              <br></br>
              <li className="font-Sansation">
                Proficiency in JavaScript, Python, Git, and familiarity with
                TypeScript React.
              </li>
              <br></br>
              <li className="font-Sansation">
                Strong communication skills, eagerness to learn, and industry or
                project experience outside of the curriculum.
              </li>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Materials section */}
      <PageSection colourWay="dark">
        <div
          style={{
            borderTop: "2px solid #5e5b5b", // Top border
            borderBottom: "2px solid #5e5b5b", // Bottom border
            width: "90%",
            margin: "0 auto",
            textAlign: "center",
            paddingBottom: "100px",
          }}
        >
          <div
            style={{
              paddingTop: "40px",
              paddingRight: "5%",
            }}
          >
            <h2 className="text-left lg:text-right text-3xl font-Sansation underline decoration-green decoration-4">
              Materials
            </h2>
          </div>
          <div
            className="text-left lg:text-right text-xl grid lg:grid-cols-2 gap-20"
            style={{
              paddingTop: "40px",
              paddingBottom: "60px",
              paddingLeft: "5%",
              paddingRight: "5%",
            }}
          >
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                margin: "0 auto",
                maxWidth: "70%",
                objectFit: "contain",
              }}
            >
              <Image
                src="/images/join_page/join_materials.jpg"
                width="800"
                height="300"
                objectFit="cover"
                alt="Join Materials"
                layout="responsive"
                style={{
                  borderRadius: 30,
                }}
              />
            </div>
            <div>
              <p className="font-Sansation">
                The Materials subteam prototypes and manufactures the fairing,
                focusing on optimising its design for aerodynamics and rider
                safety. They research methods and materials, currently using a
                resin infusion technique with epoxy resin and carbon fiber. They
                also use power tools, surface finishing, and composite creation
                to produce the fairing.
              </p>
            </div>
          </div>

          <div
            className="text-left text-xl grid lg:grid-cols-2 gap-20"
            style={{
              paddingLeft: "5%",
              paddingRight: "5%",
            }}
          >
            <div>
              <h2 className="text-left text-2xl font-Sansation underline decoration-green decoration-4">
                Responsible For
              </h2>
              <br></br>
              <li className="font-Sansation">
                Use finite element analysis (FEA) software to design and
                optimise composite components.
              </li>
              <br></br>
              <li className="font-Sansation">
                Manufacture the fairing and supplementary composite components,
                primarily working with carbon fiber.
              </li>
              <br></br>
              <li className="font-Sansation">
                Spend time in the workshop creating and testing various
                composite parts.
              </li>
            </div>
            <div>
              <h2 className="text-left text-2xl font-Sansation underline decoration-green decoration-4">
                Key Skills
              </h2>
              <br></br>
              <li className="font-Sansation">
                Experience with ANSYS Mechanical, ACP, and a solid understanding
                of CAD and FEA is preferred.
              </li>
              <br></br>
              <li className="font-Sansation">
                Strong knowledge of dynamics principles and attention to detail.
              </li>
              <br></br>
              <li className="font-Sansation">
                Willingness to learn and interest in developing hands-on skills.
              </li>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
