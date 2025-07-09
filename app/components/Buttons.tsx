import Link from "next/link";
import React from "react";

interface buttonProps {
  theme: "light" | "dark";
  text: string;
  hrefString: string;
  target: "" | "_blank"
  className?: string;
}

function Button({ theme="dark", text, hrefString = "", target,className=""}: buttonProps) {
  const colourWay = {

    light: "px-5 py-2 rounded-full border-2 bg-black text-white border-white hover:bg-green hover:text-black hover:border-black",
    dark: "px-5 py-2 rounded-full border-2 bg-green text-black border-black hover:bg-black hover:text-white hover:border-white",
  };

  return (
    <>
    <Link href={hrefString} target={target}>
      <button className={colourWay[theme] + className}>{text}</button>
    </Link>
    </>
  );
}

export default Button;
