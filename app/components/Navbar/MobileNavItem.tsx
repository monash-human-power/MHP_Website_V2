"use client";
import Link from "next/link";
import React from "react";
import { GoogleAnalytics } from '@next/third-parties/google';

interface navItemProps {
  name: string;
  hrefString: string;
}

function MobileNavItem({ name, hrefString }: navItemProps) {
  return (
    <>
    <GoogleAnalytics gaId="G-T8HB40Y133" /> 
    <Link
      className="text-center hover:bg-gray-700 block px-3 py-2 rounded-md text-sm"
      href={hrefString}
    >
      <span>{name}</span>
    </Link>
    </>
  );
}

export default MobileNavItem;
