import React from "react";

function ArrowDown(props: { color: string }) {
  return (
    <div className={props.color === "white" ? "bg-black" : "bg-white"}>
      <svg
        className="w-full h-12 mt-[-1px] z-0" /* Added z-index */
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon fill={props.color} points="0,0 50,100 100,0" />
      </svg>
    </div>
  );
}

export default ArrowDown;
