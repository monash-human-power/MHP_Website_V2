import React, { useState } from "react";
import ApplicationCard from "./ApplicationCard";

const teamApplications = [
  {
    subteam: "Operations",
    img: "/images/join_page/join_operations.jpg",
    formLink: "https://www.google.com",
  },
  {
    subteam: "Electrical",
    img: "/images/join_page/join_electrical.jpg",
    formLink: "https://www.google.com",
  },
  {
    subteam: "Materials",
    img: "/images/join_page/join_materials.jpg",
    formLink: "https://www.google.com",
  },
  {
    subteam: "Aerodynamics",
    img: "/images/join_page/join_aerodynamics.jpg",
    formLink: "https://www.google.com",
  },
  {
    subteam: "Rider Development",
    img: "/images/join_page/join_rider_dev.jpg",
    formLink: "https://www.google.com",
  },
  {
    subteam: "Chassis and Drivetrain",
    img: "/images/join_page/join_chassis_drivetrain.jpg",
    formLink: "https://www.google.com",
  },
];

export default function ApplicationCarousel() {
  const [openCard, setOpenCard] = useState(null);

  return (
    // <div className="flex flex-row overflow-hidden whitespace-nowrap">
    //   {teamApplications.map((team, idx) => (
    //     <ApplicationCard {...team} key={idx} />
    //   ))}
      // </div>
          <div className=" w-full mt-12 relative flex overflow-x-hidden bg-scrollerColor">
      <div className="animate-marquee py-6 flex  whitespace-nowrap flex-shrink-0">
        {teamApplications.map((team, idx) => (
           <ApplicationCard {...team} key={idx} />
        ))}
      </div>
      <div className="animate-marquee top-0 py-6 flex whitespace-nowrap flex-shrink-0">
        {teamApplications.map((team, idx) => (
          <ApplicationCard {...team} key={idx} />
        ))}
      </div>
    </div>
  );
}
