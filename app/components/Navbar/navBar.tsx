"use client";
import Link from "next/link";
import Image from "next/image";
import NavItem from "./NavItem";
import MobileNavItem from "./MobileNavItem";
import { useState } from "react";
import Banner from "../Banner";

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
  { name: "Competitions", href: "/competitions" },
  { name: "Teams", href: "/teams" },
  { name: "News", href: "/news" },
  { name: "Outreach", href: "/outreach" },
  { name: "Join", href: "/join" },
  { name: "Contact Us", href: "/contact" },
];

const desktopNavigation: NavItemsProps[] = [
  { name: "Bikes", href: "/bikes", srcString: "" },
  { name: "Competitions", href: "/competitions", srcString: "" },
  { name: "Teams", href: "/teams", srcString: "" },
  { name: "Home", href: "/", srcString: "/images/logo.png" },
  { name: "Outreach", href: "/outreach", srcString: "" },
  { name: "News", href: "/news", srcString: "" },
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

  // Banner settings
  const BANNER_TEXT = "Launch Night 13 August 2025"
  const SHOW_BANNER = true

  // Old code for drop down menus
  // const handleItemClick = (item: MobileNavItemsProps) => {
  //   if (item.name === "Teams") {
  //     setTeamMenu(true);
  //   } else if (item.name === "Competitions") {
  //     setCompMenu(true);
  //   }
  // };

  return (
    <>
    <header className="sticky top-0 z-50">
      <nav className="relative w-full shadow-2xl bg-black text-white font-Aldrich xl:text-xl lg:text-l z-1">
        {/* Mobile Navbar */}
        <div className=" lg:hidden py-5 flex justify-between items-center">
          {/* Image */}
          <div className="flex-1/4"></div>
          <div className="justify-center items-center">
            <a href="/">
              <Image
                src="/images/mobile_logo.png"
                alt="Logo"
                width={80}
                height={50}
              />
            </a>
          </div>
          {/* Menu button */}
          <button
            onClick={handleOpen}
            className="flex-1/4  hover:text-gray-300 focus:outline-none focus:text-gray-300"
          >
            {/* Toggle button icon */}
            {menuOpen ? (
              // cross icon
              <svg
                className="h-6 w-6 mr-1"
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
                // hamburger icon
              <svg
                className="h-6 w-6 mr-1"
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
        <div className="hidden lg:block font-Aldrich  mx-auto">
          <div className="flex justify-between items-center h-full w-full">
            {/* Left Navigation Items */}
            <div className="flex-[2] flex justify-around">
              {desktopNavigation.slice(0, 3).map((item, index) => (
                <NavItem
                  key={index}
                  text={item.name}
                  hrefString={item.href}
                  srcString={item.srcString}
                />
              ))}
            </div>

            {/* Center Logo */}
            <div className="flex-[1] flex justify-center">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={100}
                  height={50}
                  className="cursor-pointer"
                />
              </Link>
            </div>

            {/* Right Navigation Items */}
            <div className="flex-[2] flex justify-around items-center">
              {desktopNavigation
                .slice(3)
                .map(
                  (item, index) =>
                    item.name !== "Home" && (
                      <NavItem
                        key={index}
                        text={item.name}
                        hrefString={item.href}
                        srcString={item.srcString}
                      />
                    )
                )}
<div className="ml-4 mr-4">
  <Link href="/contact">
    <button className="px-5 py-2 rounded-md border-2 border-white hover:bg-green hover:text-black hover:border-black">
      Contact Us
    </button>
  </Link>
</div>

            </div>
          </div>
        </div>{" "}
        {/* Mobile Menu */}
        <div
          className={`lg:hidden ${
            menuOpen && !teamMenu && !compMenu ? "block" : "hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {mobileNavigation.map((item, index) => (
              <MobileNavItem
                key={index}
                name={item.name}
                hrefString={item.href}
                onClick={handleOpen}
              />
            ))}
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
                className="text-sm rounded-md  bg-green text-zinc-700 border-black  px-3 py-2"
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
                onClick={handleOpen}
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
                className="text-sm rounded-md  bg-green text-zinc-700 border-black  px-3 py-2"
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
                onClick={handleOpen}

              />
            ))}
          </div>
        </div>
        <Banner text={BANNER_TEXT} isVisible={SHOW_BANNER} />
      </nav>
    </header>
    </>
  );
};

export default Navbar;
