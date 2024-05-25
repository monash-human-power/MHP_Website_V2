import Link from "next/link";
import React from "react";

interface buttonProps {
    text: string;
    hrefString: string;
  }

function Button({text, hrefString = ''} : buttonProps) {
    return (
        <Link href = {hrefString}>
            <button className="px-5 py-2 rounded-md border-2 border-white hover:bg-greenbutton hover:text-black hover:border-black">
                {text}
            </button>
        </Link>
    );
  }

  export default Button;