"use client"

import Link from "next/link";

interface SamePageNavBarProps {
    sections: string[]; // list of the sections to scroll to
    activeSection: string; // Currently active section
    setActiveSection: (section: string) => void; // Function to set active section
}

const SamePageNavBar = ({ sections , activeSection, setActiveSection} : SamePageNavBarProps) => {
    return (
        <>
        <nav className="sticky w-full bg-black text-white font-Aldrich xl:text-xl lg:text-l z-50 top-28">
            <div className="hidden lg:block font-Aldrich">
            <div className="flex justify-center items-center h-full w-full space-x-10 pl-4 pt-2 pb-2">
            {sections.map((section, key) => (
            <Link key ={key} href={'#'+section} 
                className={"hover:text-green"+`${activeSection===section 
                        ? "font-Aldrich text-green" 
                        : "font-Aldrich hover:text-green"}`} 
                onClick={() => setActiveSection(section)}>{section}</Link>
        ))}
            </div>
            </div>
        </nav>
        </>
    )
}

export default SamePageNavBar