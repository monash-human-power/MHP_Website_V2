import React from "react";

// TODO: enforce text fonts correct, make sure button + header components obey colour

interface PageSectionProps {
  colourWay: "light" | "dark"; //Options are dark and light
  children: React.ReactNode;
}

const sectionThemes = {
  light: "bg-white text-black p-10 w-full",
  dark: "bg-black text-white p-10 w-full",
};

// Page section component are essentaily just a container class used to enforce colour themes
export default function PageSection({ colourWay, children }: PageSectionProps) {
  return <div className={sectionThemes[colourWay]}>{children}</div>;
}
