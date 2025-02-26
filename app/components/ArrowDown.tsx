import React from "react";
import { GoogleAnalytics } from '@next/third-parties/google';

function ArrowDown(props: { color: string }) {
  return (
    <>
    <div className={props.color === "white" ? "bg-black" : "bg-greenbutton"}>
      <svg
        className="flex w-full h-12 mt-[-1px] z-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon fill={props.color} points="0,0 50,100,100,0" />
      </svg>
    </div>
    </>
  );
}

export default ArrowDown;
