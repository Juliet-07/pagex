"use client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LinkDropdown from "./Link-dropdown";
import { cn } from "../utils/index";
import { IoIosArrowDown } from "react-icons/io";
import MenuBar from "./Toggle";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../utils/collapsible";
import { motion } from "framer-motion";
import Logo from "../assets/logo.svg";

const routes = [
  { name: "Home", path: "/" },
  {
    name: "About Us",
    path: "/about",
    dropdown: [
      { name: "Goals", path: "#goals" },
      { name: "Objectives", path: "#objectives" },
      { name: "Company Values", path: "#values" },
      { name: "Solutions", path: "#solutions" },
      { name: "Why Now", path: "#whyNow" },
      { name: "SDG's Targeted", path: "#SDG" },
    ],
  },
  {
    name: "Market Place",
    path: "/marketplace",
    dropdown: [
      { name: "Product Vision", path: "#vision" },
      { name: "Pagex Goals", path: "#goals" },
      { name: "Join Our Waitlist", path: "/waitlist" },
      { name: "How it works", path: "#how-it-works" },
      { name: "Features", path: "#features" },
      { name: "Volunteer with Us", path: "#volunteer-with-us" },
      // { name: "Visit Pagex", path: "#" },
    ],
  },
  { name: "Partners", path: "/partners" },
  { name: "Contact Us", path: "/contact" },
  { name: "Blogs", path: "/blogs" },
  { name: "Gallery", path: "/gallery" },
];

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "px-5 md:px-16 h-20 flex items-center justify-between w-full",
        isSticky ? "bg-primary-900 text-white" : "bg-transparent",
        "fixed top-0 left-0 z-50 transition-colors duration-300 font-nunito"
      )}
    >
      <div className="logo flex gap-2 items-center text-white  text-sm md:text-lg font-bold font-nunito">
        <img src={Logo} alt="Logo" className="w-[67px] h-[68px]" />
        <span>Pazelgreen</span>
      </div>

      {/* Mobile View */}
      <MenuBar
        isOpen={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="md:hidden"
      />
      <motion.div
        initial={{ x: "-100%", opacity: 1 }}
        animate={{ x: isOpen ? 0 : "-100%", opacity: isOpen ? 1 : 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden menu flex flex-col gap-6 absolute top-20 left-0 w-full bg-white p-4 shadow-lg h-[70vh]"
      >
        {routes.map((route, index) =>
          route.dropdown ? (
            <Collapsible key={index}>
              <CollapsibleTrigger className="flex items-center gap-4 text-black-400">
                <Link
                  to={route.path || "#"}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-black-700 hover:text-primary-300 font-nunito"
                >
                  {route.name}
                </Link>
                <span className="text-xl">&#9662;</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="flex flex-col gap-2.5 text-sm ml-2">
                {route.dropdown.map((subRoute, subIndex) =>
                  subRoute.path.startsWith("#") ? (
                    <a
                      key={subIndex}
                      href={subRoute.path}
                      className="text-sm text-gray-900 hover:text-primary-300 no-underline"
                      onClick={() => setIsOpen(false)}
                    >
                      {subRoute.name}
                    </a>
                  ) : (
                    <Link
                      key={subIndex}
                      to={subRoute.path}
                      className="text-sm text-gray-900 hover:text-primary-300 no-underline"
                      onClick={() => setIsOpen(false)}
                    >
                      {subRoute.name}
                    </Link>
                  )
                )}
              </CollapsibleContent>
            </Collapsible>
          ) : (
            <Link
              key={index}
              to={route.path}
              className="text-black-400 hover:text-primary-300 transition duration-300 ease-in-out"
              onClick={() => setIsOpen(false)}
            >
              {route.name}
            </Link>
          )
        )}
      </motion.div>

      {/* Desktop View */}
      <div className="hidden menu md:flex gap-6 items-center">
        {routes.map((route, index) =>
          route.dropdown ? (
            <LinkDropdown
              key={index}
              trigger={
                <Link
                  to={route.path ?? "#"}
                  className="flex gap-2 items-center hover:text-primary-300 transition duration-300 ease-in-out"
                >
                  <span>{route.name}</span>
                  <IoIosArrowDown />
                </Link>
              }
              classNames={{
                button: "text-white",
                menu: "bg-white gap-3 flex flex-col p-1",
                menuItems: "p-4 py-6 space-y-3",
              }}
            >
              {/* {route.dropdown.map((subRoute, subIndex) => (
                <Link
                  key={subIndex}
                  to={subRoute.path}
                  className="block text-sm hover:text-primary-300 transition duration-300 ease-in-out no-underline hover:no-underline"
                >
                  {subRoute.name}
                </Link>
              ))} */}
              {route.dropdown.map((subRoute, subIndex) =>
                subRoute.path.startsWith("#") ? (
                  <a
                    key={subIndex}
                    href={subRoute.path}
                    className="block text-sm hover:text-primary-300 transition duration-300 ease-in-out no-underline hover:no-underline"
                  >
                    {subRoute.name}
                  </a>
                ) : (
                  <Link
                    key={subIndex}
                    to={subRoute.path}
                    className="block text-sm hover:text-primary-300 transition duration-300 ease-in-out no-underline hover:no-underline"
                  >
                    {subRoute.name}
                  </Link>
                )
              )}
            </LinkDropdown>
          ) : (
            <Link
              key={index}
              to={route.path}
              className="text-white hover:text-primary-300 transition duration-300 ease-in-out"
            >
              {route.name}
            </Link>
          )
        )}
        <button className="bg-primary-500 w-[133px] h-[52px] text-white font-semibold rounded-xl">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
