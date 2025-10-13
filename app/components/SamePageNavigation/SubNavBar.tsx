
interface SubNavBarProps {
    sections: string[]; // List of section names
    activeSection: string; // Currently active section
    setActiveSection: (section: string) => void; // Function to set active section
  }

/**
 * Currently used to navigate between "Overview" and "Gallery" for each Bike on the Bikes page
 */
const SubNavBar = ({sections, activeSection, setActiveSection} : SubNavBarProps) => {
    {/* Wide Screen Navbar */}
    return (
        <>
        <nav className="relative w-full bg-black text-white font-Aldrich xl:text-xl lg:text-l z-1">
             <div className="block font-Aldrich">
          <div className="flex justify-start items-center h-full w-full space-x-10 pl-4 pt-2 pb-2">
            {sections.map((section, key) => (
                <button 
                    key={section} // unique key for each section
                    className={`${activeSection===section 
                        ? "font-Aldrich text-green" 
                        : "font-Aldrich hover:text-green"}`}
                        onClick={() => setActiveSection(section)} // set the active section on click
                        >
                    {section}
                </button>
            ))
            }
            </div>
        </div>
        </nav>
        </>
    );
};

export default SubNavBar;