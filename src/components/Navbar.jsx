import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ResumeModal from "./ResumeModal";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
          scrolled ? "bg-primary" : "bg-transparent"
        }`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold flex">
              Himanshu &nbsp;
              <span className="sm:block hidden">| Full Stack Developer</span>
            </p>
          </Link>

          {/* DESKTOP NAV */}
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}

            {/* ✅ Resume Button (Desktop) */}
            <li>
              <button
                className={`text-[18px] font-medium ${
                  active === "resume" ? "text-white" : "text-secondary"
                } hover:text-white`}
                onClick={() => {
                  setActive("resume");
                  setResumeOpen(true);
                }}
              >
                Resume
              </button>
            </li>
          </ul>

          {/* MOBILE NAV */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px]"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                toggle ? "flex" : "hidden"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-50 rounded-xl`}
            >
              <ul className="list-none flex flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-medium text-[16px] cursor-pointer ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}


                <li>
                  <button
                    className={`font-medium text-[16px] ${
                      active === "resume" ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(false);
                      setActive("resume");
                      setResumeOpen(true);
                    }}
                  >
                    Resume
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>


      {resumeOpen && (
        <ResumeModal closeModal={() => setResumeOpen(false)} />
      )}
    </>
  );
};

export default Navbar;