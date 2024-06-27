import Link from "next/link";
import React from "react";

interface MenuItemProps {
  title: String;
  items: { name: string; href: string }[];
}

export default function MenuNavBarItem({ title, items }: MenuItemProps) {
  return (
    <div className="group relative">
      <div className="flex items-center justify-between ">
        <span className="menu-hover lg:mx-4 hover:border-b-2 hover:border-greenbutton hover:-translate-y-1">
          {title}
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>

      <div className="  invisible absolute z-50 flex w-full flex-col bg-black text-sm text-white shadow-xl group-hover:visible">
        {items.map((item, index) => (
          <Link key={index} href={item.href}>
            <li className="my-2 block border-b border-gray-100 py-1  hover:text-greenbutton md:mx-2">
              {item.name}
            </li>
          </Link>
        ))}
        {/* */}
      </div>
    </div>
  );
}
