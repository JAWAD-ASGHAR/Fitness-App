import React, { useState } from "react";
import { MdOutlineNotifications } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai"; 
import { IoLogOutOutline } from "react-icons/io5";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } = useAuth0();
  const [logoutOpen, setLogoutOpen] = useState(false);

  const Dialog = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-5 rounded-lg w-72 relative">
          <div className="flex flex-col h-full justify-between gap-2">
            <div className="flex justify-between">
              <h5 className="mb-5 font-semibold">Confirm Log Out!</h5>
              <button
                className="text-xl absolute top-6 right-7 hover:bg-gray-200 rounded-full"
                onClick={onClose}
              >
                <AiOutlineClose />
              </button>
            </div>
            <button
              className="px-5 py-4 bg-gray-200 hover:bg-gray-300 w-full rounded flex items-center gap-2"
              onClick={logout}
            >
              {<IoLogOutOutline size={20} />} Log Out
            </button>
          </div>
        </div>
      </div>
    );
  };

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
            {isAuthenticated && user && (
              <img
                onClick={() => setLogoutOpen(true)}
                className="rounded-full w-9 h-9 cursor-pointer"
                src={user.picture}
                alt="User Profile"
              />
            )}
          </div>
        </div>
        <center>
          <hr className=" w-11/12 " />
        </center>
      </div>
      {logoutOpen && (
        <Dialog isOpen={logoutOpen} onClose={() => setLogoutOpen(false)} />
      )}
    </>
  );
};

export default Header;