import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useAuth0 } from "@auth0/auth0-react";
import { FaUnlock } from "react-icons/fa";

const Header = () => {

  const [theme, setTheme] = useState("light");

  //use as per need
  const { loginWithRedirect,  user, isAuthenticated, isLoading, logout} = useAuth0();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme])

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  const links = [
    {
      id: 1,
      name: "Home",
      route: "",
    },
    {
      id: 2,
      name: "Services",
      route: "",
    },
    {
      id: 3,
      name: "Pricing",
      route: "",
    },
    {
      id: 4,
      name: "About",
      route: "",
    },
    {
      id: 5,
      name: "Support",
      route: "",
    },
  ];

  return (
    <div className="w-full bg-[#EDEEF2] dark:bg-slate-800 h-20 flex items-center justify-around">
      <div className="dark:text-white text-slate-800 font-bold text-4xl flex items-center cursor-pointer" onClick={handleTheme}>
        LOGO
      </div>
      <div className="dark:text-white text-slate-800 flex items-center">
        {
          <ul className="flex gap-8">
            {links.map((link) => (  
              <a key={link.id} href={link.route}>
                <li
                  className="dark:text-white text-slate-800 font-medium cursor-pointer hover:text-[#C1E503]"
                >
                  {link.name}
                </li>
              </a>
            ))}
          </ul>
        }
      </div>
      <div className="flex gap-10 items-center">
        <Button icon={<FaUnlock />}  onClick={() => loginWithRedirect()} className="dark:text-white font-medium text-slate-800 p-4">
          Login
        </Button>
        <Button color="yellow" onClick={() => loginWithRedirect()} className="font-medium rounded-lg px-4">
          Start Free
        </Button>
      </div>
    </div>
  );
};

export default Header;