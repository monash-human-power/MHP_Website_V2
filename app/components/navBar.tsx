"use client";
import Link from "next/link";
import NavItem from "./NavItem";
import MenuNavBarItem from "./MenuNavItem";
import { useState } from "react";

interface NavItems {
  name: string;
  href: string;
  srcString: string;
}

const mobileNavigation: NavItems[] = [
  { name: "Home", href: "/", srcString: "" },
  { name: "Bikes", href: "#", srcString: "" },
  { name: "Competitions", href: "#", srcString: "" },
  { name: "Teams", href: "#", srcString: "" },
  { name: "Blog", href: "#", srcString: "" },
  { name: "Join", href: "#", srcString: "" },
  { name: "Contact Us", href: "#", srcString: "" },
];

const desktopNavigation: NavItems[] = [
  { name: "Bikes", href: "/bikes", srcString: "" },
  { name: "Competitions", href: "/competitions", srcString: "" },
  { name: "Teams", href: "/teams", srcString: "" },
  { name: "Home", href: "/", srcString: "/image.png" },
  { name: "Blog", href: "/blog", srcString: "" },
  { name: "Join", href: "/join", srcString: "" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky w-full bg-black text-white font-Aldrich text-xl">
      {/* Mobile Navbar */}
      <div className="block md:hidden flex justify-between items-center">
        {/* Image */}
        <div className="flex-1/4"></div>
        <div className=" justify-center items-center">
          <img src="/mobile_image.png" alt="Logo" width={75} height={50} />
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
      <div className="hidden md:block font-Aldrich">
        <div className="flex justify-between items-center h-full w-full">
          {desktopNavigation.map((item, index) =>
            item.name !== "Teams" ? (
              <NavItem
                key={index}
                text={item.name}
                hrefString={item.href}
                srcString={item.srcString}
              />
            ) : (
              <MenuNavBarItem key={index} />
            )
          )}
          <div className="px-10 py-2">
            <Link href={"/bikes"}>
              <button className=" px-5 py-2 rounded-md border-2 border-white hover:bg-greenbutton hover:text-black hover:border-black">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${menuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
          {mobileNavigation.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="  text-center hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
