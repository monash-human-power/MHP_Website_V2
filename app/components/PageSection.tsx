import React from "react";

interface PageSectionProps {
  colourWay: "light" | "dark"; //Options are dark and light
  children: React.ReactNode;
}

const sectionThemes = {
  light: "position-relative bg-white text-black p-12 w-full z-0 ",
  dark: "position-relative bg-black text-white p-12 w-full z-0 ",
};

// Page section component are essentaily just a container class used to enforce colour themes
export default function PageSection({ colourWay, children }: PageSectionProps) {
  return <div className={sectionThemes[colourWay]}>{children}</div>;
}
