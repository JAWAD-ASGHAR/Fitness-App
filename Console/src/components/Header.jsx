import React from "react";
import { MdOutlineNotifications } from "react-icons/md";
const Header = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-between w-full px-14 py-3">
          <div className="font-bold text-2xl">Dashboard</div>
          <div className="flex space-x-5">
            <MdOutlineNotifications className="w-9 h-9" />
            <img
              className="rounded-full w-9 h-9"
              src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg"
            />
            <img
              className="rounded-full w-9 h-9"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAA1BMVEX/XgA92nntAAAASElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC3AcUIAAFkqh/QAAAAAElFTkSuQmCC"
            />
          </div>
        </div>
        <center>
          <hr className=" w-11/12 " />
        </center>
      </div>
    </>
  );
};

export default Header;
