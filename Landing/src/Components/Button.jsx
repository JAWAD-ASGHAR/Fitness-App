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
          className={`w-auto max-w-56 h-10 ${color} flex gap-2 justify-center items-center ${props.className}`}
        >
          {props.icon}
          {props.children}
        </button>
      }
    </>
  );
};

export default Button;
