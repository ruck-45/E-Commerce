import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { DASHBOARD_SIDEBAR_LINKS } from "./lib/constants/navigation";
import { Link, useLocation } from "react-router-dom";

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);

      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-neutral-900 text-white  flex flex-col h-full">
      <div className="block md:hidden" onClick={toggleSidebar}>
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.zxAZWXiT6IJsqtReLhELWwHaHa&pid=Api&P=0&h=180"
          alt="Menu Icon"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full cursor-pointer"
        />
      </div>

      <div className={classNames("flex flex-col flex-1", { hidden: isMobile && !isOpen })}>
        <div className="flex items-center gap-2 px-1 py-3 cursor-pointer">
          <div className="pt-2" onClick={toggleSidebar}>
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.zxAZWXiT6IJsqtReLhELWwHaHa&pid=Api&P=0&h=180"
              alt="Menu Icon"
              className="w-10 h-8 md:w-8 md:h-8 rounded-full"
            />
          </div>
          <span className={classNames("text-neutral-100 text-3xl", { "text-2xl md:text-4xl": isMobile })}>
            SHOPNEST
          </span>
        </div>
        <div className="py-8 flex flex-col gap-0.5">
          {DASHBOARD_SIDEBAR_LINKS.map((link) => (
            <Link
              key={link.key}
              to={`/Layout${link.path}`}
              className={classNames(
                "flex items-center",
                pathname === `/Layout${link.path}` ? "bg-neutral-700 text-white" : "text-neutral-400",
                linkClass
              )}
            >
              <span className="text-xl">{link.icon}</span>
              <span className="text-white">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
