import Link from "next/link";
import React from "react";

interface buttonProps {
  theme: "light" | "dark";
  text: string;
  hrefString: string;
}

function Button({ theme, text, hrefString = "" }: buttonProps) {
  const colourWay = {
    light: "px-5 py-2 rounded-full border-2 bg-purple text-white ",
    dark: "px-5 py-2 rounded-full border-2 bg-greenbutton text-black",
  };

  return (
    <Link href={hrefString}>
      <button className={colourWay[theme]}>{text}</button>
    </Link>
  );
}

export default Button;
