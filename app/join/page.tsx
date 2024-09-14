import Button from "../components/Buttons";
import PageSection from "../components/PageSection";
import Image from "next/image";

export default function Outreach() {
  return (
    <>
      {/* Battle Mountain Group Image */}
      <section className="relative text-center py-5 animate-fadeIn">
        <div className="items-center overflow-hidden mx-auto">
          <Image
            src="/battle_mountain_group.jpg"
            width="800"
            height="300"
            objectFit="cover"
            alt="Epsom Primary School"
            layout="responsive"
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
              paddingRight: "10%",
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
              <li>
                abc
              </li>
              <li>
                abc
              </li>
              <li>
                abc
              </li>
            </div>
            <div>
              <h2 className="text-left text-2xl font-Sensation underline decoration-green decoration-4">
                Key Skills
              </h2>
              <li>
                abc
              </li>
              <li>
                abc
              </li>
              <li>
                abc
              </li>
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
              paddingLeft: "10%",
              paddingRight: "10%",
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
              <li>
                abc
              </li>
              <li>
                abc
              </li>
              <li>
                abc
              </li>
            </div>
            <div>
              <h2 className="text-left text-2xl font-Sensation underline decoration-green decoration-4">
                Key Skills
              </h2>
              <li>
                abc
              </li>
              <li>
                abc
              </li>
              <li>
                abc
              </li>
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
              paddingRight: "10%",
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
              <li>
                abc
              </li>
              <li>
                abc
              </li>
              <li>
                abc
              </li>
            </div>
            <div>
              <h2 className="text-left text-2xl font-Sensation underline decoration-green decoration-4">
                Key Skills
              </h2>
              <li>
                abc
              </li>
              <li>
                abc
              </li>
              <li>
                abc
              </li>
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
              paddingLeft: "10%",
              paddingRight: "10%",
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
              <li>
                abc
              </li>
              <li>
                abc
              </li>
              <li>
                abc
              </li>
            </div>
            <div>
              <h2 className="text-left text-2xl font-Sensation underline decoration-green decoration-4">
                Key Skills
              </h2>
              <li>
                abc
              </li>
              <li>
                abc
              </li>
              <li>
                abc
              </li>
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
              paddingRight: "10%",
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
              <li>
                abc
              </li>
              <li>
                abc
              </li>
              <li>
                abc
              </li>
            </div>
            <div>
              <h2 className="text-left text-2xl font-Sensation underline decoration-green decoration-4">
                Key Skills
              </h2>
              <li>
                abc
              </li>
              <li>
                abc
              </li>
              <li>
                abc
              </li>
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
              paddingLeft: "10%",
              paddingRight: "10%",
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
              <li>
                abc
              </li>
              <li>
                abc
              </li>
              <li>
                abc
              </li>
            </div>
            <div>
              <h2 className="text-left text-2xl font-Sensation underline decoration-green decoration-4">
                Key Skills
              </h2>
              <li>
                abc
              </li>
              <li>
                abc
              </li>
              <li>
                abc
              </li>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
