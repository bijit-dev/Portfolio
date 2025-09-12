import React, { useEffect, useState } from "react";
import Image from "../Image";
import Logo from "../../assets/logo.png";

// Import some icons from react-icons (feather)
import { FiHome, FiUser, FiCode, FiFolder, FiBookOpen, FiMail } from "react-icons/fi";
import { NavLink } from "react-router";

const sections = [
  { id: "about", label: "About", icon: <FiUser size={18} /> },
  { id: "experience", label: "Experience", icon: <FiUser size={18} /> },
  { id: "skills", label: "Skills", icon: <FiCode size={18} /> },
  { id: "projects", label: "Projects", icon: <FiFolder size={18} /> },
  { id: "contact", label: "Contact", icon: <FiMail size={18} /> },
];

const Navber = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      let currentSection = "home";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPos) {
          currentSection = section.id;
        }
      }
      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-sm">
      <div className="navbar container mx-auto px-4 md:px-4 Poppins">
        <a
          href="#home"
          className="navbar-start w-[300px] cursor-pointer flex items-center"
        >
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-8 md:w-14 rounded-full ring ring-offset-2">
              <Image src={Logo} />
            </div>
          </div>
          <div className="font-extrabold text-white text-xl md:text-2xl lg:text-3xl px-4">
            <span className="text-emerald-600">BIJIT </span>DEB
          </div>
        </a>

        <div className="inline-flex justify-end items-center w-full">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal text-sm xl:text-lg font-medium font-pop justify-end">
              <li>
                <NavLink to="/"
                  className={`relative flex items-center gap-1 duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-emerald-600 after:transition-[width]
                      hover:text-emerald-600 hover:after:w-full
                      ${active === 'home'
                      ? "text-emerald-600 after:w-full font-bold"
                      : "text-accent"
                    }`}
                >
                  <FiHome size={18} />
                  Home
                </NavLink>
              </li>
              {sections.map(({ id, label, icon }) => (
                <li key={id}>
                  <NavLink
                    to={`#${id}`}
                    className={`relative flex items-center duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-emerald-600 after:transition-[width]
                      hover:text-emerald-600 hover:after:w-full
                      ${active === id
                        ? "text-emerald-600 after:w-full font-bold"
                        : "text-accent"
                      }`}
                  >
                    {icon}
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block lg:1/12">
            <a
              href="https://drive.google.com/uc?export=download&id=1V6HB_eOovNUy_bEFn9aROzP5aLXKuUBN"
              download="Bijit_Deb_Resume.pdf"
              rel="noopener noreferrer"
            >
              <button className="btn btn-success h-8 xl:h-10 font-bold cursor-pointer">
                Resume
              </button>
            </a>
          </div>

          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm right-0 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 gap-2 p-2 shadow"
            >
              <li>
                <NavLink to="/"
                  className={`relative flex items-center gap-1 duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-emerald-600 after:transition-[width]
                      hover:text-emerald-600 hover:after:w-full
                      ${active === "home"
                      ? "text-emerald-600 after:w-full font-bold"
                      : "text-accent"
                    }`}
                >
                  <FiHome size={18} />
                  Home
                </NavLink>
              </li>
              {sections.map(({ id, label, icon }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`relative flex items-center gap-1 duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-emerald-600 after:transition-[width]
                      hover:text-emerald-600 hover:after:w-full
                      ${active === id
                        ? "text-emerald-600 after:w-full font-bold"
                        : "text-accent"
                      }`}
                  >
                    {icon}
                    {label}
                  </a>
                </li>
              ))}
              <a
                href="https://drive.google.com/uc?export=download&id=1V6HB_eOovNUy_bEFn9aROzP5aLXKuUBN"
                download="Bijit_Deb_Resume.pdf"
                rel="noopener noreferrer"
              >
                <button className="btn btn-success font-bold cursor-pointer">
                  Resume
                </button>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
