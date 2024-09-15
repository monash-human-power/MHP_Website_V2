import Button from "../components/Buttons";
import PageSection from "../components/PageSection";
import Image from "next/image";

export default function Outreach() {
  return (
    <>
      {/* Battle Mountain Group Image */}
      <section className="animate-fadeIn">
        <div className="w-dvh h-96 items-center overflow-hidden mx-auto">
          <Image
            src="/battle_mountain_group.jpg"
            width="800"
            height="300"
            objectFit="cover"
            alt="Battle Mountain Group"
            layout="responsive"
            className="top-1/2  transform -translate-y-1/3"
          />
        </div>
      </section>

      {/* Join Us section */}
      <PageSection colourWay="dark">
        <div className="text-center">
          <h1 className="text-5xl text-[#acf601] font-bold">Join Us</h1>
          <div
            className="text-xl"
            style={{
              paddingTop: "40px",
              paddingBottom: "20px",
              width: "60%",
              margin: "0 auto",
            }}
          >
            <p>Applications are currently closed.</p>
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
          className="text-center text-3xl"
          style={{
            paddingTop: "40px",
            paddingBottom: "20px",
          }}
        >
          {/* Expression of Interest button links to Google Form */}
          <button className="px-16 py-4 rounded-full border-2 bg-green text-black border-black hover:bg-black hover:text-white hover:border-white">
            Expression of Interest
          </button>
        </div>
      </PageSection>

      {/* Rider Developement section */}
      <PageSection colourWay="dark">
        <div
          style={{
            borderTop: "2px solid #B3B3B3", // Top border
            width: "90%",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              paddingTop: "40px",
              paddingLeft: "10%",
            }}
          >
            <h2 className="text-left text-3xl font-Sensation underline decoration-green decoration-4">
              Rider Development
            </h2>
          </div>
          <div
            className="text-left text-xl grid grid-cols-2 gap-10"
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
              }}
            >
              <Image
                src="/join_rider_dev.jpg"
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
            className="text-left text-xl grid grid-cols-2 gap-10"
            style={{
              paddingLeft: "10%",
              paddingRight: "5%",
            }}
          >
            <div>
              <h2 className="text-left text-2xl font-Sensation underline decoration-green decoration-4">
                Responsible For
              </h2>
              <li>abc</li>
              <li>abc</li>
              <li>abc</li>
            </div>
            <div>
              <h2 className="text-left text-2xl font-Sensation underline decoration-green decoration-4">
                Key Skills
              </h2>
              <li>abc</li>
              <li>abc</li>
              <li>abc</li>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Aerodynamics section */}
      <PageSection colourWay="dark">
        <div
          style={{
            borderTop: "2px solid #B3B3B3", // Top border
            width: "90%",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              paddingTop: "40px",
              paddingRight: "10%",
            }}
          >
            <h2 className="text-right text-3xl font-Sensation underline decoration-green decoration-4">
              Aerodynamics
            </h2>
          </div>
          <div
            className="text-right text-xl grid grid-cols-2 gap-10"
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
              }}
            >
              <Image
                src="/join_aerodynamics.jpg"
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
              <p>
                The Aerodynamics subteam at MHP designs and tests aerodynamic
                components like the external shell and wheel covers to reduce
                drag and increase bike speed. They use computational fluid
                dynamics (CFD) and experimental testing in the Monash Wind
                Tunnel to make design choices that enhance bike performance.
              </p>
            </div>
          </div>

          <div
            className="text-right text-xl grid grid-cols-2 gap-10"
            style={{
              paddingLeft: "10%",
              paddingRight: "5%",
            }}
          >
            <div>
              <h2 className="text-right text-2xl font-Sensation underline decoration-green decoration-4">
                Responsible For
              </h2>
              <li>abc</li>
              <li>abc</li>
              <li>abc</li>
            </div>
            <div>
              <h2 className="text-right text-2xl font-Sensation underline decoration-green decoration-4">
                Key Skills
              </h2>
              <li>abc</li>
              <li>abc</li>
              <li>abc</li>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Chassis and Drivetrain section */}
      <PageSection colourWay="dark">
        <div
          style={{
            borderTop: "2px solid #B3B3B3", // Top border
            width: "90%",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              paddingTop: "40px",
              paddingLeft: "10%",
            }}
          >
            <h2 className="text-left text-3xl font-Sensation underline decoration-green decoration-4">
              Chassis and Drivetrain
            </h2>
          </div>
          <div
            className="text-left text-xl grid grid-cols-2 gap-10"
            style={{
              paddingTop: "40px",
              paddingBottom: "60px",
              paddingLeft: "5%",
              paddingRight: "5%",
            }}
          >
            <div>
              <p>
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
              }}
            >
              <Image
                src="/join_chassis_drivetrain.jpg"
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
            className="text-left text-xl grid grid-cols-2 gap-10"
            style={{
              paddingLeft: "10%",
              paddingRight: "5%",
            }}
          >
            <div>
              <h2 className="text-left text-2xl font-Sensation underline decoration-green decoration-4">
                Responsible For
              </h2>
              <li>abc</li>
              <li>abc</li>
              <li>abc</li>
            </div>
            <div>
              <h2 className="text-left text-2xl font-Sensation underline decoration-green decoration-4">
                Key Skills
              </h2>
              <li>abc</li>
              <li>abc</li>
              <li>abc</li>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Operations section */}
      <PageSection colourWay="dark">
        <div
          style={{
            borderTop: "2px solid #B3B3B3", // Top border
            width: "90%",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              paddingTop: "40px",
              paddingRight: "10%",
            }}
          >
            <h2 className="text-right text-3xl font-Sensation underline decoration-green decoration-4">
              Operations
            </h2>
          </div>
          <div
            className="text-right text-xl grid grid-cols-2 gap-10"
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
              }}
            >
              <Image
                src="/join_operations.jpg"
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
              <p>
                The Operations subteam engages external stakeholders,
                coordinates with sponsors, and markets MHP activities. They
                organise events like the "Build a HPV" school outreach program,
                promote STEM pathways, and support the technical team's bike
                manufacturing. They are also involved in graphic design and
                branding for MHP.
              </p>
            </div>
          </div>

          <div
            className="text-right text-xl grid grid-cols-2 gap-10"
            style={{
              paddingLeft: "10%",
              paddingRight: "5%",
            }}
          >
            <div>
              <h2 className="text-right text-2xl font-Sensation underline decoration-green decoration-4">
                Responsible For
              </h2>
              <li>abc</li>
              <li>abc</li>
              <li>abc</li>
            </div>
            <div>
              <h2 className="text-right text-2xl font-Sensation underline decoration-green decoration-4">
                Key Skills
              </h2>
              <li>abc</li>
              <li>abc</li>
              <li>abc</li>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Electrical section */}
      <PageSection colourWay="dark">
        <div
          style={{
            borderTop: "2px solid #B3B3B3", // Top border
            width: "90%",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              paddingTop: "40px",
              paddingLeft: "10%",
            }}
          >
            <h2 className="text-left text-3xl font-Sensation underline decoration-green decoration-4">
              Electrical
            </h2>
          </div>
          <div
            className="text-left text-xl grid grid-cols-2 gap-10"
            style={{
              paddingTop: "40px",
              paddingBottom: "60px",
              paddingLeft: "5%",
              paddingRight: "5%",
            }}
          >
            <div>
              <p>
                The Electrical subteam manages the bike's electrical and
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
              }}
            >
              <Image
                src="/join_electrical.jpg"
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
            className="text-left text-xl grid grid-cols-2 gap-10"
            style={{
              paddingLeft: "10%",
              paddingRight: "5%",
            }}
          >
            <div>
              <h2 className="text-left text-2xl font-Sensation underline decoration-green decoration-4">
                Responsible For
              </h2>
              <li>abc</li>
              <li>abc</li>
              <li>abc</li>
            </div>
            <div>
              <h2 className="text-left text-2xl font-Sensation underline decoration-green decoration-4">
                Key Skills
              </h2>
              <li>abc</li>
              <li>abc</li>
              <li>abc</li>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Materials section */}
      <PageSection colourWay="dark">
        <div
          style={{
            borderTop: "2px solid #B3B3B3", // Top border
            borderBottom: "2px solid #B3B3B3", // Bottom border
            width: "90%",
            margin: "0 auto",
            textAlign: "center",
            paddingBottom: "100px",
          }}
        >
          <div
            style={{
              paddingTop: "40px",
              paddingRight: "10%",
            }}
          >
            <h2 className="text-right text-3xl font-Sensation underline decoration-green decoration-4">
              Materials
            </h2>
          </div>
          <div
            className="text-right text-xl grid grid-cols-2 gap-10"
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
              }}
            >
              <Image
                src="/join_materials.jpg"
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
              <p>
                The Materials subteam prototypes and manufactures the fairing,
                focusing on optimizing its design for aerodynamics and rider
                safety. They research methods and materials, currently using a
                resin infusion technique with epoxy resin and carbon fiber. They
                also use power tools, surface finishing, and composite creation
                to produce the fairing.
              </p>
            </div>
          </div>

          <div
            className="text-right text-xl grid grid-cols-2 gap-10"
            style={{
              paddingLeft: "10%",
              paddingRight: "5%",
            }}
          >
            <div>
              <h2 className="text-right text-2xl font-Sensation underline decoration-green decoration-4">
                Responsible For
              </h2>
              <li>abc</li>
              <li>abc</li>
              <li>abc</li>
            </div>
            <div>
              <h2 className="text-right text-2xl font-Sensation underline decoration-green decoration-4">
                Key Skills
              </h2>
              <li>abc</li>
              <li>abc</li>
              <li>abc</li>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
