"use client";
import Link from "next/link";
import React from "react";

interface navItemProps {
  name: string;
  hrefString: string;
  onClick:()=>void;
}

function MobileNavItem({ name, hrefString,onClick }: navItemProps) {
  return (
    <>
    <Link
      className="text-center hover:bg-gray-700 block px-3 py-2 rounded-md text-sm"
      href={hrefString}
      onClick={onClick}
    >
      <span>{name}</span>
    </Link>
    </>
  );
}

export default MobileNavItem;
