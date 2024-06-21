import React from "react";
import Button from "./Button";
import { FaUnlock } from "react-icons/fa";

const Header = () => {
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
    <div className="w-full bg-slate-800 h-20 flex items-center justify-around">
      <div className="text-white font-bold text-4xl flex items-center">
        LOGO
      </div>
      <div className="text-white flex items-center">
        {
          <ul className="flex gap-8">
            {links.map((link) => (
              <a href={link.route}>
                <li
                  key={link.id}
                  className="text-white cursor-pointer hover:text-[#C1E503]"
                >
                  {link.name}
                </li>
              </a>
            ))}
          </ul>
        }
      </div>
      <div className="flex gap-10 items-center">
        <Button icon={<FaUnlock />} className="text-white">
          Login
        </Button>
        <Button color="yellow" className="font-medium">
          Start Free
        </Button>
      </div>
    </div>
  );
};

export default Header;
