import React, { useState, useEffect } from "react";
import { MdOutlineNotifications } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import { useAuth0 } from "@auth0/auth0-react";
import { TbPointFilled } from "react-icons/tb";

const Header = (props) => {
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } =
    useAuth0();
  const [logoutOpen, setLogoutOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const notifications = [
    "Great job! You've completed your workout for today.",
    "Reminder: Drink 8 glasses of water today.",
    "You’ve achieved your step goal for the day. Keep moving!",
    "Time for a break! Stretch and relax for 5 minutes.",
    "New workout plan available! Check it out now.",
    "Congratulations! You've earned a new badge for consistency.",
    "Don't forget to log your meals for today.",
    "Join the 30-day fitness challenge and stay motivated!",
    "Your friend just beat your record in the 5K run. Can you top it?",
    "Tip of the day: Warm up before your workout to prevent injuries."
  ];
  

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
  const NotificationDropdown = ({ isOpen, notifications, onClose }) => {
    if (!isOpen) return null;
    return (
      <div className="absolute right-24 mt-10 z-50 w-96 bg-white border border-gray-300 rounded-lg shadow-lg">
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <h5 className="font-semibold">Notifications</h5>
          <button
            onClick={onClose}
            className="text-xl hover:bg-gray-200 rounded-full"
          >
            <AiOutlineClose />
          </button>
        </div>
        <div className="h-80 overflow-y-auto scrollbar-thumb-lime-400 scrollbar-track-slate-200 scrollbar-thin">
          <div>
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-gray-100 flex items-center justify-start border-b border-gray-100 gap-2"
              >
                <div className="flex-shrink-0">
                  <TbPointFilled size={15} />
                </div>
                <span className="flex-grow">{notification}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="w-full">
        <div className="flex justify-between w-full px-14 py-3">
          <div className="font-bold text-2xl">{props.title}</div>
          <div className="flex space-x-5 relative">
            <MdOutlineNotifications
              className="w-9 h-9 cursor-pointer rounded-full hover:bg-slate-200"
              onClick={() => setNotificationsOpen(!notificationsOpen)}
            />
            <NotificationDropdown
              isOpen={notificationsOpen}
              notifications={notifications}
              onClose={() => setNotificationsOpen(false)}
            />
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
          <hr className="w-11/12 border-gray-300" />
        </center>
      </div>
      <Dialog isOpen={logoutOpen} onClose={() => setLogoutOpen(false)} />
    </>
  );
};

export default Header;
