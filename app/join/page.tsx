"use client";
import { ApplicationCardInfo } from "../components/ApplicationCarousel/ApplicationCard";
import ApplicationCarousel from "../components/ApplicationCarousel/ApplicationCarousel";
import PageSection from "../components/PageSection";
import Image from "next/image";

const teamApplications: ApplicationCardInfo[] = [
  {
    subteam: "Electrical",
    role: "Software Developer ",
    img: "/images/join_page/join_electrical_software.jpg",
    formLink: "https://forms.gle/TjAdcGJ4XshRsRn49",
    content: {
      description:
        "The Electrical subteam oversees the bike’s electrical and software systems, including cameras and data acquisition tools essential for rider safety and performance. The setup features components such as Raspberry Pis, microcontrollers, sensors, and custom software for field data analysis.",
      responsibilities: [
        "Develop and maintain the team’s React-based web application.",
        "Contribute to Python/C++ projects for physical modelling, data processing, and microcontroller programming.",
        "Write clear documentation for codebases, APIs, and pull requests to support team collaboration.",
      ],
      keySkills: [
        "Experience with maintaining and documenting code.",
        "Experience with Javascript, Python, microcontrollers and Git",
        "Knowledgeable on communication protocols (MQTT, TWAI)",
        "Familiarity with TypeScript React",
        "Non-curriculum projects are highly regarded. Let us know what you’ve done!",
      ],
    },
  }, {
    subteam: "Electrical",
    role: "Hardware Team Member ",
    img: "/images/join_page/join_electrical.jpg",
    formLink: "https://forms.gle/JMxtZdHxPHNQSz5M9",
    content: {
      description:
        "The Electrical subteam oversees the bike’s electrical and software systems, including cameras and data acquisition tools essential for rider safety and performance. The setup features components such as Raspberry Pis, microcontrollers, sensors, and custom software for field data analysis.",
      responsibilities: [
        "Design and manufacture PCBs, including schematics, simulations, and documentation.",
        "Program Raspberry Pi and microcontrollers to interface with sensor systems.",
        "Support testing and troubleshooting of electronic systems during on-track sessions.",
      ],
      keySkills: [
        "Experience with practical projects using Arduino, Raspberry Pi or similar printed circuit boards (PCBs).",
        "Knowledge in C or Python programming.",
        "Interested in circuit/PCB design for microcontrollers and sensors.",
      ],
    },
  },

  {
    subteam: "Aerodynamics",
    role: "Team Member",
    img: "/images/join_page/join_aerodynamics.jpg",
    formLink: "https://forms.gle/Mz3PqnVuEYwZ2CM17",
    content: {
      description: "The Aerodynamics subteam at MHP designs and tests aerodynamic components like the external shell and wheel covers to reduce drag and increase bike speed. They use computational fluid dynamics (CFD) to learn and make aerodynamic design choices that optimise and enhance bike performance.",
      responsibilities: [
        "Design and test aerodynamic components using CAD tools like NX.",
        "Conduct CFD simulations using ANSYS Fluent.",
        "Contribute to manufacturing, data analysis, and upskilling fellow team members in aerodynamic principles and tools.",
      ],
      keySkills: [
        "Strong understanding of aerodynamics, CFD simulations, and experience with ANSYS Fluent.",
        " Proficiency in CAD software, especially NX and SolidWorks, with an interest in 3D printing for prototyping.",
      ],
    },
  },
  {
    subteam: "Rider Development",
    role: "Rider",
    img: "/images/join_page/join_rider_dev.jpg",
    formLink: "https://forms.gle/Xm8KgDh1M4Vb54PP9",
    content: {
      description: "The Rider Development subteam focuses on maximising rider performance. Comprised of riders and technical members, they arrange cycling and strength training, develop personal power plans, and coordinate training days at the Packer Park Velodrome.",
      responsibilities: [
        "Train consistently to develop the physical and mental strength required for high-speed intensive cycling.",
        "Master the use of the onboard camera system to maintain control and awareness while riding.",
        "Participate in testing sessions and race events, including international competitions like Battle Mountain, to push the limits of human-powered speed.",
      ],
      keySkills: [
        "Strong physical and mental fitness, with a background or keen interest in cycling.",
        "Possess strong cardiovascular endurance required to maintain high intensity cycling over extended periods.",
        "Passion for competitive high-speed racing.",
      ],
    },
  }, {
    subteam: "Materials",
    role: "Team Member",
    img: "/images/join_page/join_materials.jpg",
    formLink: "https://forms.gle/bMRAw2q4nYRTg1LH8",
    content: {
      description: "The Materials subteam prototypes and manufactures the fairing, focusing on optimising its design for aerodynamics and rider safety. They research and experiment with various composite manufacturing methods and composite materials to create the aerodynamic fairing.",
      responsibilities: [
        "Using finite element analysis (FEA) software to design and optimise composite components.",
        "Manufacturing the fairing and supplementary composite components.",
        "Critically analysing processes and testing samples to improve the team’s understanding of composites and optimise manufacturing methods",
      ],
      keySkills: [
        "Experience with ANSYS Mechanical, ACP, and a solid understanding of CAD and FEA is preferred.",
        "Basic understanding of composites.",
        "High attention to detail and willingness to learn.",
        "Strong sense of initiative, creativity and experience with personal hands on projects."
      ],
    },
  },
  {
    subteam: "Chassis and Drivetrain",
    role: "Team Member",
    img: "/images/join_page/join_chassis.jpg",
    formLink: "https://forms.gle/wJXyqcAnRGDGUYSv9",
    content: {
      description: "The Chassis & Drivetrain subteam designs and manufactures all mechanical components of the vehicle, using CAD and Finite Element Analysis (FEA) to model and verify their strength. They utilise Monash University facilities for manufacturing, employing techniques like welding and building.",
      responsibilities: [
        "Design and test the vehicle’s chassis, currently using a chromoly steel space-frame.",
        "Develop and validate CAD models and structural components using FEA tools.",
        "Contribute to future design improvements, including exploration of composite materials.",
        "Optimise drivetrain performance using cycling knowledge and industry-standard components.",
        "Advise on component selection and configuration to improve efficiency and reliability.",
        "Collaborate with other engineers to ensure seamless integration within the vehicle system."
      ],
      keySkills: [
        "Strong CAD and FEA skills, with an interest in vehicular frame design and prototyping to test solutions.",
        "Comprehensive knowledge of bicycle drivetrains, with experience in working with and maintaining them.",
      ],
    },
  },
  {
    subteam: "Operations",
    role: "Events Officer",
    img: "/images/join_page/join_operations.jpg",
    formLink: "https://forms.gle/HHhRFBUFKCiRtEyH9",
    content: {
      description:
        "The Operations subteam handles marketing, sponsorship, events, and outreach to promote MHP and engage the community. They run programs like “Build a HPV,” manage sponsor relations, and support STEM engagement,branding, and the team's website.",
      responsibilities: [
        "Plan and deliver engaging events to strengthen relationships with sponsors and maintain strong partnerships.",
        "Organise social activities and initiatives to build a strong, connected team culture within MHP.",
        "Lead outreach programs that promote STEM and MHP to schools and the public.",
      ],
      keySkills: [
        "Strong organisational and time management skills to coordinate multiple events smoothly.",
        "Excellent communication and interpersonal skills for engaging stakeholders and attendees.",
        "Creativity and initiative to design engaging, impactful events that align with MHP’s mission.",
      ],
    },
  },
  {
    subteam: "Operations",
    role: "Marketing Officer / Graphic Designer ",
    img: "/images/join_page/join_operations_marketing.jpg",
    formLink: "https://forms.gle/HHhRFBUFKCiRtEyH9",
    content: {
      description:
        "The Operations subteam handles marketing, sponsorship, events, and outreach to promote MHP and engage the community. They run programs like “Build a HPV,” manage sponsor relations, and support STEM engagement,branding, and the team's website.",
      responsibilities: [
        "Plan and deliver engaging events to strengthen relationships with sponsors and maintain strong partnerships.",
        "Organise social activities and initiatives to build a strong, connected team culture within MHP.",
        "Lead outreach programs that promote STEM and MHP to schools and the public.",
      ],
      keySkills: [
        "Proficiency in content creation tools (photo/video editing, graphic design, social platforms).",
        "Creating thinking and visual storytelling.",
        "Strategic thinking and data driven decision making in social media and branding.",
      ],
    },
  },
  {
    subteam: "Operations",
    role: "Sponsorship Officer ",
    img: "/images/join_page/join_operations_sponsor.jpg",
    formLink: "https://forms.gle/HHhRFBUFKCiRtEyH9",
    content: {
      description:
        "The Operations subteam handles marketing, sponsorship, events, and outreach to promote MHP and engage the community. They run programs like “Build a HPV,” manage sponsor relations, and support STEM engagement,branding, and the team's website.",
      responsibilities: [
        "Engage and build relationships with potential sponsors through professional communication and rapport-building.",
        "Understand sponsor needs and align MHP’s value proposition to their goals and interests.",
        "Secure and maintain sponsorships by presenting compelling proposals, handling objections, and ensuring consistent follow-up.",
      ],
      keySkills: [
        "Confident communication and relationship-building with industry professionals.",
        "Strategic thinking and persuasive storytelling to secure support and funding.",
        "Resilience to manage rejection and foster long-term partnerships.",
      ],
    },
  },
  {
    subteam: "Operations",
    role: "Web Developer ",
    img: "/images/join_page/join_operations_website.jpg",
    formLink: "https://forms.gle/HHhRFBUFKCiRtEyH9",
    content: {
      description:
        "The Operations subteam handles marketing, sponsorship, events, and outreach to promote MHP and engage the community. They run programs like “Build a HPV,” manage sponsor relations, and support STEM engagement,branding, and the team's website.",
      responsibilities: [
        "Design, build, and maintain a visually appealing, user-friendly, and engaging website.",
        "Test, debug, and optimise website features to ensure smooth functionality across different devices.",
        "Create UI designs and prototypes that align with MHP’s brand and user needs.",
      ],
      keySkills: [
        "Proficient in React, Tailwind CSS, and version control systems like Git.",
        "Strong grasp of UX/UI principles, with Figma experience being preferred but not required",
        "Experience working with content management systems (CMS) is a plus.",
      ],
    },
  }
];

const IS_RECRUITING = false;

export default function Join() {
  return (
    <>
      <title>Join | MHP</title>

      {/* Cover Image */}
      <PageSection colourWay="dark">
        <h1 className="text-center text-5xl">Join Us</h1>
        <Image
          src="/images/join_page/join_main.jpg"
          width="5184"
          height="2309"
          objectFit="cover"
          alt="Trike Group photo"
          layout="responsive"
        />
      </PageSection>

      {/* Join Us section */}
      <PageSection colourWay="dark">
        <div className="text-center">
          <div
            className="text-xl"
            style={{
              paddingTop: "40px",
              paddingBottom: "20px",
              width: "60%",
              margin: "0 auto",
            }}
          >
            {IS_RECRUITING ? (<><p>Applications are open!</p><br /><p>
              Apply for one of MHP&apos;s subteams below. <br />
              If you have any further questions or queries, feel free to direct
              them to monashhpt@gmail.com
            </p></>) : (<><p>Recruitment is closed</p><br /><p>
              If you have any further questions or queries, feel free to direct
              them to monashhpt@gmail.com
            </p></>)}




          </div>


        </div>
        <div
          className={`${IS_RECRUITING ? "-pt-10" : "pt-10"} pb-20`}>

          {IS_RECRUITING ? 
          <ApplicationCarousel applicationInfo={teamApplications} />
            : 
            <a href="https://forms.gle/U3Nn54SyTsi1WJYj7" target="_blank">
              <button className=" font-Sansation font-semibold px-4 py-2 lg:px-16 lg:py-2 rounded-full border-2 bg-green text-black border-black hover:bg-black hover:text-white hover:border-white">
                EOI Form
              </button>
            </a>
            }

        </div>
      </PageSection>

    </>
  );
}
