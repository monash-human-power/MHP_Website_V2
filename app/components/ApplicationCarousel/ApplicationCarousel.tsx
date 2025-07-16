import React, { useEffect, useRef, useState } from "react";
import ApplicationCard from "./ApplicationCard";
import { animate } from "motion";
import { motion, useInView, useMotionValue } from "motion/react";

const teamApplications = [
  {
    subteam: "Operations",
    role: "Events officer",
    img: "/images/join_page/join_operations.jpg",
    formLink: "https://forms.gle/HHhRFBUFKCiRtEyH9",
    content: (
      <div className="flex flex-col text-left overflow-y-scroll">
        The Operations subteam handles marketing, sponsorship, events, and
        outreach to promote MHP and engage the community. They run programs like
        “Build a HPV,” manage sponsor relations, and support STEM engagement,
        branding, and the team&apos;s website.
        <br />
        <b>Responsibilities:</b>
        <ul className="pl-4">
          <li>
            Plan and deliver engaging events to strengthen relationships with
            sponsors and maintain strong partnerships.
          </li>
          <li>
            Organise social activities and initiatives to build a strong,
            connected team culture within MHP.
          </li>
          <li>
            Lead outreach programs that promote STEM and MHP to schools and the
            public.
          </li>
        </ul>
        <b>Key Skills:</b>
        <ul className="pl-4">
          <li>
            Strong organisational and time management skills to coordinate
            multiple events smoothly.
          </li>
          <li>
            Excellent communication and interpersonal skills for engaging
            stakeholders and attendees.
          </li>{" "}
          <li>
            Creativity and initiative to design engaging, impactful events that
            align with MHP&apos;s mission.
          </li>
        </ul>
      </div>
    ),
  },
  {
    subteam: "Operations",
    role: "Marketing Officer / Graphic Designer ",
    img: "/images/join_page/join_operations_marketing.jpg",
    formLink: "https://forms.gle/HHhRFBUFKCiRtEyH9",
    content: (
      <div className="flex flex-col text-left overflow-y-scroll">
        The Operations subteam handles marketing, sponsorship, events, and
        outreach to promote MHP and engage the community. They run programs like
        “Build a HPV,” manage sponsor relations, and support STEM engagement,
        branding, and the team&apos;s website.
        <br />
        <b>Responsibilities:</b>
        <ul className="pl-4">
          <li>
            Create and manage visual, written, and social media content that
            aligns with MHP&apos;s brand.
          </li>
          <li>
            Plan and execute marketing strategies, including event promotion and
            sponsor engagement.
          </li>
          <li>
            Analyse social media performance and adapt content to maximise
            outreach and engagement.
          </li>
        </ul>
        <b>Key Skills:</b>
        <ul className="pl-4">
          <li>
            Proficiency in content creation tools (photo/video editing, graphic
            design, social platforms).
          </li>
          <li>Creating thinking and visual storytelling.</li>{" "}
          <li>
            Strategic thinking and data driven decision making in social media
            and branding.
          </li>
        </ul>
      </div>
    ),
  },
  {
    subteam: "Operations",
    role: "Sponsorship Officer ",
    img: "/images/join_page/join_operations_sponsor.jpg",
    formLink: "https://forms.gle/HHhRFBUFKCiRtEyH9",
    content: (
      <div className="flex flex-col text-left overflow-y-scroll">
        The Operations subteam handles marketing, sponsorship, events, and
        outreach to promote MHP and engage the community. They run programs like
        “Build a HPV,” manage sponsor relations, and support STEM engagement,
        branding, and the team&apos;s website.
        <br />
        <b>Responsibilities:</b>
        <ul className="pl-4">
          <li>
            Engage and build relationships with potential sponsors through
            professional communication and rapport-building.
          </li>
          <li>
            Understand sponsor needs and align MHP&apos;s value proposition to
            their goals and interests.
          </li>
          <li>
            Secure and maintain sponsorships by presenting compelling proposals,
            handling objections, and ensuring consistent follow-up.
          </li>
        </ul>
        <b>Key Skills:</b>
        <ul className="pl-4">
          <li>
            Confident communication and relationship-building with industry
            professionals.
          </li>
          <li>
            Strategic thinking and persuasive storytelling to secure support and
            funding.
          </li>{" "}
          <li>
            Resilience to manage rejection and foster long-term partnerships.
          </li>
        </ul>
      </div>
    ),
  },
  {
    subteam: "Electrical",
    role: "Software Developer ",
    img: "/images/join_page/join_electrical_software.jpg",
    formLink: "https://forms.gle/TjAdcGJ4XshRsRn49",
    content: (
      <div className="flex flex-col text-left overflow-y-scroll">
        The Electrical subteam oversees the bike&apos;s electrical and software
        systems, including cameras and data acquisition tools essential for
        rider safety and performance. The setup features Raspberry Pis,
        microcontrollers, sensors, and custom software for field data analysis.{" "}
        <br />
        <b>Responsibilities:</b>
        <ul className="pl-4">
          <li>
            Develop and maintain the team&apos;s React-based web application.
          </li>
          <li>
            Contribute to Python projects for physical modelling, data
            processing, and microcontroller programming.
          </li>
          <li>
            Write clear documentation for codebases, APIs, and pull requests to
            support team collaboration.
          </li>
        </ul>
        <b>Key Skills:</b>
        <ul className="pl-4">
          <li>Experience with Javascript/TypeScript, React and/or Python.</li>
          <li>Familiarity with Git version control.</li>{" "}
          <li>Experience with maintaining and documenting code.</li>
        </ul>
      </div>
    ),
  },
  {
    subteam: "Electrical",
    role: "Hardware Member ",
    img: "/images/join_page/join_electrical.jpg",
    formLink: "https://forms.gle/7PQXNrRSYSEDM9NF8",
    content: (
      <div className="flex flex-col text-left overflow-y-scroll">
        The Electrical subteam oversees the bike&apos;s electrical and software
        systems, including cameras and data acquisition tools essential for
        rider safety and performance. The setup features Raspberry Pis,
        microcontrollers, sensors, and custom software for field data analysis.{" "}
        <br />
        <b>Responsibilities:</b>
        <ul className="pl-4">
          <li>
            Design and manufacture PCBs, including schematics, simulations, and
            documentation.
          </li>
          <li>
            {" "}
            Program Raspberry Pi and microcontrollers to interface with sensor
            systems.
          </li>
          <li>
            Support testing and troubleshooting of electronic systems during
            on-track sessions.
          </li>
        </ul>
        <b>Key Skills:</b>
        <ul className="pl-4">
          <li>
            Experience with practical projects using Arduino, Raspberry Pi or
            similar printed circuit boards (PCBs).
          </li>
          <li>Knowledge in C or Python programming.</li>
          <li>
            Interested in circuit/PCB design for microcontrollers and sensors.
          </li>
        </ul>
      </div>
    ),
  },
  {
    subteam: "Materials",
    role: "Team Member",

    img: "/images/join_page/join_materials.jpg",
    formLink: "https://forms.gle/kpHaodUN7fvxmfjh9",
    content: (
      <div className="flex flex-col text-left overflow-y-scroll">
        The Materials subteam prototypes and manufactures the fairing, focusing
        on optimising its design for aerodynamics and rider safety. They
        research and experiment with various composite manufacturing methods and
        composite materials to create the aerodynamic fairing.
        <br />
        <b>Responsibilities:</b>
        <ul className="pl-4">
          <li>
            Using finite element analysis (FEA) software to design and optimise
            composite components.
          </li>
          <li>
            {" "}
            Manufacturing the fairing and supplementary composite components.
          </li>
          <li>
            Critically analysing processes and testing samples to improve the
            team&apos;s understanding of composites and optimise manufacturing
            methods.
          </li>
        </ul>
        <b>Key Skills:</b>
        <ul className="pl-4">
          <li>
            Experience with ANSYS Mechanical, ACP, and a solid understanding of
            CAD and FEA is preferred.
          </li>
          <li>Basic understanding of composites.</li>
          <li>High attention to detail and willingness to learn.</li>{" "}
          <li>
            Strong sense of initiative, creativity and experience with personal
            hands on projects.
          </li>
        </ul>
      </div>
    ),
  },
  {
    subteam: "Aerodynamics",
    role: "Team Member",
    img: "/images/join_page/join_aerodynamics.jpg",
    formLink: "https://forms.gle/Mz3PqnVuEYwZ2CM17",
    content: (
      <div className="flex flex-col text-left overflow-y-scroll">
        The Aerodynamics subteam at MHP designs and tests aerodynamic components
        like the external shell and wheel covers to reduce drag and increase
        bike speed. They use computational fluid dynamics (CFD) to learn and
        make aerodynamic design choices that optimise and enhance bike
        performance.
        <br />
        <b>Responsibilities:</b>
        <ul className="pl-4">
          <li>
            Design and test aerodynamic components using CAD tools like NX.
          </li>
          <li> Conduct CFD simliations using ANSYS Fluent.</li>
          <li>
            Contribute to manufacturing, data analysis, and upskilling fellow
            team members in aerodynamic principles and tools.
          </li>
        </ul>
        <b>Key Skills:</b>
        <ul className="pl-4">
          <li>
            Strong understanding of aerodynamics, CFD simliations, and
            experience with ANSYS Fluent.
          </li>
          <li>
            Proficiency in CAD software, especially NX and SolidWorks, with an
            interest in 3D printing for prototyping.
          </li>
        </ul>
      </div>
    ),
  },
  {
    subteam: "Rider Development",
    role: "Rider",
    img: "/images/join_page/join_rider_dev.jpg",
    formLink: "https://forms.gle/Xm8KgDh1M4Vb54PP9",
    content: (
      <div className="flex flex-col text-left overflow-y-scroll">
        The Rider Development subteam focuses on maximising rider performance.
        Comprised of riders and technical members, they arrange cycling and
        strength training, develop personal power plans, and coordinate training
        days at the Packer Park Velodrome.
        <br />
        <b>Responsibilities:</b>
        <ul className="pl-4">
          <li>
            Train consistently to develop the physical and mental strength
            required for high-speed intensive cycling.
          </li>
          <li>
            Master the use of the onboard camera system to maintain control and
            awareness while riding.
          </li>
          <li>
            Participate in testing sessions and race events, including
            international competitions like Battle Mountain, to push the limits
            of human-powered speed.
          </li>
        </ul>
        <b>Key Skills:</b>
        <ul className="pl-4">
          <li>
            Strong physical and mental fitness, with a background or keen
            interest in cycling
          </li>
          <li>
            Possess strong cardiovascular endurance required to maintain high
            intensity cycling over extended periods.
          </li>
          <li>Passion for competitive high-speed racing.</li>
        </ul>
      </div>
    ),
  },
  {
    subteam: "Chassis and Drivetrain",
    role: "Chassis Engineer",
    img: "/images/join_page/join_chassis_engineer.jpg",
    formLink: "https://forms.gle/wJXyqcAnRGDGUYSv9",
    content: (
      <div className="flex flex-col text-left overflow-y-scroll">
        The Chassis & Drivetrain subteam designs and manufactures all mechanical
        components of the vehicle, using CAD and Finite Element Analysis (FEA)
        to model and verify their strength. They utilise Monash University
        facilities for manufacturing, employing techniques like welding and 3D
        printing.
        <br />
        <b>Responsibilities:</b>
        <ul className="pl-4">
          <li>
            Design and test the vehicle&apos;s chassis, currently using a
            chromoly steel space-frame.
          </li>{" "}
          <li>
            Develop and validate CAD models and structural components using FEA
            tools.
          </li>{" "}
          <li>
            Contribute to future design improvements, including exploration of
            composite materials.
          </li>
        </ul>
        <b>Key Skills:</b>
        <ul className="pl-4">
          <li>
            Strong CAD and FEA skills, with an interest in vehicular frame
            design and prototyping to test solutions.
          </li>
        </ul>
      </div>
    ),
  },
  {
    subteam: "Chassis and Drivetrain",
    role: "Drivetrain Expert",
    img: "/images/join_page/join_chassis_drivetrain.jpg",
    formLink: "https://forms.gle/wJXyqcAnRGDGUYSv9",
    content: (
      <div className="flex flex-col text-left overflow-y-scroll">
        The Chassis & Drivetrain subteam designs and manufactures all mechanical
        components of the vehicle, using CAD and Finite Element Analysis (FEA)
        to model and verify their strength. They utilise Monash University
        facilities for manufacturing, employing techniques like welding and 3D
        printing.
        <br />
        <b>Responsibilities:</b>
        <ul className="pl-4">
          <li>
            Optimise drivetrain performance using cycling knowledge and
            industry-standard components.
          </li>
          <li>
            Advise on component selection and configuration to improve
            efficiency and reliability.
          </li>
          <li>
            Collaborate with other engineers to ensure seamless integration
            within the vehicle system.
          </li>
        </ul>
        <b>Key Skills:</b>
        <ul className="pl-4">
          <li>
            Comprehensive knowledge of bicycle drivetrains, with experience in
            working with and maintaining them.
          </li>
        </ul>{" "}
      </div>
    ),
  },
];

export default function ApplicationCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [pointerDown, setPointerDown] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, scrollX: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false); // if hovering over a card, scroll card not div :D
  const xMotionValue = useMotionValue(0);
  const isInView = useInView(scrollRef, { once: true, amount: 0.8 });

  const handlePointerDown = (e: React.PointerEvent) => {
    setPointerDown(true);
    setDragStart({
      x: e.clientX,
      scrollX: xMotionValue.get(),
    });
  };

  // Track pointer move when pointer is down
  useEffect(() => {
    if (!pointerDown) return;

    const handlePointerMove = (e: PointerEvent) => {
      if (!scrollRef.current) return;

      const deltaX = Math.abs(e.clientX - dragStart.x);

      if (!isDragging && deltaX > 8) {
        setIsDragging(true);
        document.body.style.cursor = "grabbing";
      }

      // Only update position if we're actively dragging
      if (isDragging) {
        const maxScroll =
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        const totalDeltaX = e.clientX - dragStart.x;
        const newX = Math.max(
          -maxScroll,
          Math.min(0, dragStart.scrollX + totalDeltaX)
        );
        xMotionValue.set(newX);
      }
    };

    const handlePointerUp = () => {
      setIsDragging(false);
      setPointerDown(false);
      document.body.style.cursor = "default";
    };

    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerup", handlePointerUp);
    document.addEventListener("pointercancel", handlePointerUp);

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("pointercancel", handlePointerUp);
    };
  }, [pointerDown, isDragging, dragStart, xMotionValue]);

  // Wheel scrolling handling
  useEffect(() => {
    console.log(isCardHovered)
    const handleWheel = (e: WheelEvent) => {
      let newX = 0;
      if (isHovered && scrollRef.current) {
        e.preventDefault();
        const maxScroll =
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        const currentX = xMotionValue.get();

        // allow for vertical scrolling + horizontal
        if (isCardHovered) {
          // If hovering over card, only allow moving via horizontal scrolling
          newX = Math.max(-maxScroll, Math.min(0, currentX - e.deltaX * 0.9));
        } else {
          // else allow both
          newX = Math.max(
            -maxScroll,
            Math.min(0, currentX - (e.deltaX * 0.9 + e.deltaY * 0.9))
          );
        }
      }

      animate(xMotionValue, newX, {
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 0.5,
      });
    };

    document.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, [xMotionValue, isHovered,isCardHovered]);

  return (
    <div className="overflow-x-scroll overflow-y-hidden  scrollbar-dark">
      <motion.div
        ref={scrollRef}
        className="w-full mt-12 sticky flex flex-row nowrap justify-between  cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onPointerDown={handlePointerDown}
        style={{
          x: xMotionValue,
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        {teamApplications.map((team, idx) => (
          <motion.div
            key={idx}
            className="flex-shrink-0 "
            initial={{ opacity: 0, y: 20 }}
            animate={isInView && { opacity: 1, y: 0 }}
            transition={{ delay: (idx % teamApplications.length) * 0.1 }}
            style={{
              userSelect: isDragging ? "none" : "auto",
            }}
          >
            <ApplicationCard
              {...team}
              onMouseHover={() => setIsCardHovered(true)}
              onMouseLeave={() => setIsCardHovered(false)}
              key={idx}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
