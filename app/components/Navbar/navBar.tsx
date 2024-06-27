"use client";
import Link from "next/link";
import Image from "next/image";
import NavItem from "./NavItem";
import MenuNavBarItem from "./MenuNavItem";
import MobileNavItem from "./MobileNavItem";
import { useState } from "react";

interface NavItemsProps {
  name: string;
  href: string;
  srcString: string;
}
interface MobileNavItemsProps {
  name: string;
  href: string;
}

const teamItems = {
  title: "Teams",
  items: [
    { name: "Management", href: "/" },
    { name: "Aerodynamic", href: "/" },
    { name: "Chassis & Drivetrain", href: "/" },
    { name: "Electrical", href: "/" },
    { name: "Materials", href: "/" },
    { name: "Rider Development", href: "/" },
    { name: "Operations", href: "/" },
    { name: "Riders", href: "/" },
    { name: "Auxiliary", href: "/" },
  ],
};

const competitionItems = {
  title: "Competitions",
  items: [
    { name: "World Human Powered Speed Challenge", href: "/" },
    { name: "OzHPV Speed Trials", href: "/" },
  ],
};

const mobileNavigation: MobileNavItemsProps[] = [
  { name: "Home", href: "/" },
  { name: "Bikes", href: "/bikes" },
  { name: "Competitions", href: "/" },
  { name: "Teams", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Join", href: "/join" },
  { name: "Contact Us", href: "/contactUs" },
];

const desktopNavigation: NavItemsProps[] = [
  { name: "Bikes", href: "/bikes", srcString: "" },
  { name: "Competitions", href: "/competitions", srcString: "" },
  { name: "Teams", href: "/teams", srcString: "" },
  { name: "Home", href: "/", srcString: "/image.png" },
  { name: "Blog", href: "/blog", srcString: "" },
  { name: "Join", href: "/join", srcString: "" },
];

const Navbar = () => {
  const [teamMenu, setTeamMenu] = useState(false);
  const [compMenu, setCompMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpen = () => {
    setMenuOpen(!menuOpen);
    if (teamMenu == true) {
      setTeamMenu(!teamMenu);
    } else if (compMenu == true) {
      setCompMenu(!compMenu);
    }
  };

  const handleItemClick = (item: MobileNavItemsProps) => {
    if (item.name === "Teams") {
      setTeamMenu(true);
    } else if (item.name === "Competitions") {
      setCompMenu(true);
    }
  };

  return (
    <header className="sticky top-0">
      <nav className="relative w-full bg-black text-white font-Aldrich xl:text-xl lg:text-l z-1">
        {/* Mobile Navbar */}
        <div className="block lg:hidden py-5 flex justify-between items-center">
          {/* Image */}
          <div className="flex-1/4"></div>
          <div className="justify-center items-center">
            <Image src="/mobile_image.png" alt="Logo" width={100} height={50} />
          </div>
          {/* Menu button */}
          <button
            onClick={handleOpen}
            className="flex-1/4 hover:text-gray-300 focus:outline-none focus:text-gray-300"
          >
            {/* Toggle button icon */}
            {menuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-16 6h16"
                />
              </svg>
            )}
          </button>
        </div>
        {/* Wide Screen Navbar */}
        <div className="hidden lg:block font-Aldrich">
          <div className="flex justify-between items-center h-full w-full">
            {desktopNavigation.map((item, index) =>
              item.name !== "Teams" && item.name !== "Competitions" ? (
                <NavItem
                  key={index}
                  text={item.name}
                  hrefString={item.href}
                  srcString={item.srcString}
                />
              ) : (
                <MenuNavBarItem
                  key={index}
                  title={
                    item.name === "Teams"
                      ? teamItems.title
                      : competitionItems.title
                  }
                  items={
                    item.name === "Teams"
                      ? teamItems.items
                      : competitionItems.items
                  }
                />
              )
            )}
            <div className="px-10 py-2">
              <Link href={"/contactUs"}>
                <button className="px-5 py-2 rounded-md border-2 border-white hover:bg-greenbutton hover:text-black hover:border-black">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`lg:hidden ${
            menuOpen && !teamMenu && !compMenu ? "block" : "hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {mobileNavigation.map((item, index) =>
              item.name === "Competitions" || item.name === "Teams" ? (
                <Link
                  key={index}
                  href=""
                  className="text-center hover:bg-gray-700 block px-3 py-2 rounded-md text-sm font-medium"
                >
                  <button onClick={() => handleItemClick(item)}>
                    {item.name + " >"}
                  </button>
                </Link>
              ) : (
                <MobileNavItem
                  key={index}
                  name={item.name}
                  hrefString={item.href}
                />
              )
            )}
          </div>
        </div>
        <div
          className={`lg:hidden ${
            menuOpen && teamMenu && !compMenu ? "block" : "hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href=""
              className={`text-left  hover:bg-gray-700  block px-3 py-2 rounded-md text-sm font-medium`}
            >
              <button
                className="text-sm rounded-md  bg-greenbutton text-zinc-700 border-black  px-3 py-2"
                onClick={() => setTeamMenu(!teamMenu)}
              >
                {"< Back"}
              </button>
            </Link>
            {teamItems.items.map((item, index) => (
              <MobileNavItem
                key={index}
                name={item.name}
                hrefString={item.href}
              />
            ))}
          </div>
        </div>
        <div
          className={`lg:hidden ${
            menuOpen && !teamMenu && compMenu ? "block" : "hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href=""
              className={`text-left hover:bg-gray-700  block px-3 py-2 rounded-md text-sm font-medium`}
            >
              <button
                className="text-sm rounded-md  bg-greenbutton text-zinc-700 border-black  px-3 py-2"
                onClick={() => setCompMenu(!compMenu)}
              >
                {"< Back"}
              </button>
            </Link>
            {competitionItems.items.map((item, index) => (
              <MobileNavItem
                key={index}
                name={item.name}
                hrefString={item.href}
              />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
