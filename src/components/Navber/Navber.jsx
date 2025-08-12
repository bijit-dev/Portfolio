import React, { useEffect, useState } from "react";
import Image from "../Image";
import Logo from "../../assets/logo.png";

const sections = ["home", "about", "skills", "projects", "education", "contact"];

const Navber = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      let currentSection = "home";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos) {
          currentSection = section;
        }
      }
      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initialize on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const list = sections.map((section) => ({
    label: section.charAt(0).toUpperCase() + section.slice(1),
    href: `#${section}`,
  }));

  return (
    <nav className="sticky top-0 z-50 bg-base-100 shadow-sm">
      <div className="navbar container mx-auto px-4 md:px-8 Poppins">
        <a href="#home" className="navbar-start cursor-pointer flex items-center">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-8 md:w-14 rounded-full ring ring-offset-2">
              <Image src={Logo} />
            </div>
          </div>
          <div className="font-extrabold text-xl md:text-2xl lg:text-3xl px-4">
            <span className="text-emerald-600">BIJIT </span>DEB
          </div>
        </a>

        <div className="navbar-end md:w-10/12">
          <div className="hidden lg:flex pr-6">
            <ul className="menu menu-horizontal px-1 flex gap-x-6 text-lg font-medium font-pop justify-end">
              {list.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={`relative duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-emerald-600 after:transition-[width]
                      hover:text-emerald-600 hover:after:w-full
                      ${active === href.substring(1)
                        ? "text-emerald-600 after:w-full font-bold"
                        : "text-accent"
                      }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block lg:1/12">
            <a
              href="https://rxresu.me/bijitdeb087/bijit-deb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-success font-bold cursor-pointer">Resume</button>
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {list.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={`relative duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-emerald-600 after:transition-[width]
                      hover:text-emerald-600 hover:after:w-full
                      ${active === href.substring(1)
                        ? "text-emerald-600 after:w-full font-bold"
                        : "text-accent"
                      }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navber;