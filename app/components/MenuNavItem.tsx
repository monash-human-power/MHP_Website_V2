import Link from "next/link";
import React from "react";

export default function MenuNavBarItem() {
  return (
    <div className="group relative">
      <div className="flex items-center justify-between ">
        <a className="menu-hover lg:mx-4 hover:border-b hover:border-greenbutton">
          Teams
        </a>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>

      <div className="invisible absolute flex w-full flex-col bg-black text-white shadow-xl group-hover:visible">
        <a className="my-2 block border-b border-gray-100 py-1  hover:text-greenbutton md:mx-2">
          Team 1
        </a>

        <a className="my-2 block border-b border-gray-100 py-1  hover:text-greenbutton md:mx-2">
          {" "}
          Team 2
        </a>

        <a className="my-2 block border-b border-gray-100 py-1  hover:text-greenbutton md:mx-2">
          {" "}
          Team 3
        </a>

        <a className="my-2 block border-b border-gray-100 py-1  hover:text-greenbutton md:mx-2">
          {" "}
          Team 4
        </a>

        <a className="my-2 block border-b border-gray-100 py-1  hover:text-greenbutton md:mx-2">
          {" "}
          Team 5
        </a>

        <a className="my-2 block border-b border-gray-100 py-1  hover:text-greenbutton md:mx-2">
          {" "}
          Team 6
        </a>
      </div>
    </div>
  );
}
