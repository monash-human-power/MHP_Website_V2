"use client";
import Link from "next/link";
import { useState } from "react";

interface NavItem {
  name: string;
  href: string;
}
interface TeamItems {
  name: string;
  href: string;
}

const navigation: NavItem[] = [
  { name: "Home", href: "" },
  { name: "Bikes", href: "#" },
  { name: "Competitions", href: "#" },
  { name: "Teams", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Join", href: "#" },
  { name: "Contact Us", href: "#" },
];

const teamNavigation: TeamItems[] = [
  { name: "subteam 1", href: "" },
  { name: "subteam 2", href: "" },
  { name: "subteam 3", href: "" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full bg-black text-white font-Aldrich text-xl">
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
          <div className="px-10 py-2">
            <Link href={"/bikes"}>
              <span className="font-Aldrich">Bikes</span>
            </Link>
          </div>
          <div className="px-10 py-2">
            <Link href={"/bikes"}>
              <span className="text-Aldrich">Competitions</span>
            </Link>
          </div>
          <div className="px-10 py-2">
            <Link href={"/bikes"}>
              <span className="text-Aldrich">Team</span>
            </Link>
          </div>
          <div className="px-10 py-2">
            <Link href={"/"}>
              <img src="/image.png" width={100} height={75}></img>
            </Link>
          </div>
          <div className="px-10 py-2">
            <Link href={"/bikes"}>
              <span className="text-Aldrich">Blog</span>
            </Link>
          </div>
          <div className="px-10 py-2">
            <Link href={"/bikes"}>
              <span className="text-Aldrich">Join</span>
            </Link>
          </div>
          <div className="rounded-md px-10 py-2 border border-white hover:bg-greenbutton hover:text-black hover:animate-pulse">
            <Link href={"/bikes"}>
              <button className="">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${menuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
          {navigation.map((item, index) => (
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
