import React from "react";

const Button = (props) => {
  let color = "";
  if (props.color === "yellow") {
    color = "bg-[#C1E503]";
  }

  return (
    <>
      {
        <button
          className={`w-auto h-10 ${color} flex gap-2 items-center rounded-lg px-4 ${props.className}`}
        >
          {props.icon}
          {props.children}
        </button>
      }
    </>
  );
};

export default Button;
