"use client";
import Link from "next/link";
import React from "react";

interface navItemProps {
  name: string;
  hrefString: string;
}

function MobileNavItem({ name, hrefString }: navItemProps) {
  return (
    <Link
      className="text-center hover:bg-gray-700 block px-3 py-2 rounded-md text-sm"
      href={hrefString}
    >
      <span>{name}</span>
    </Link>
  );
}

export default MobileNavItem;
