interface SubNavBarProps {
    sections: string[]; // List of section names
    activeSection: string; // Currently active section
    setActiveSection: (section: string) => void; // Function to set active section
  }

const SubNavBar = ({sections, activeSection, setActiveSection} : SubNavBarProps) => {
    {/* Wide Screen Navbar */}
    return (
        <div className="hidden lg:block font-Aldrich">
          <div className="flex justify-between items-center h-full w-full">
            {sections.map((section, key) => (
                <button 
                    key={section} // unique key for each section
                    className={`${activeSection===section 
                        ? "font-Aldrich border-b-2 border-greenbutton" 
                        : "font-Aldrich hover:border-b-2 hover:border-greenbutton"}`}
                        onClick={() => setActiveSection(section)} // set the active section on click
                        >
                    {section}
                </button>
            ))
            }
            </div>
        </div>
    );
};

export default SubNavBar;