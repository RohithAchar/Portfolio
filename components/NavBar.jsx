"use client";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 50) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (!activeSection) {
    setActiveSection("about");
  }
  return (
    <nav className="mt-24 hidden lg:block">
      <ul className="">
        <li>
          <a
            href="#about"
            className={`${
              activeSection === "about"
                ? "font-bold text-primary"
                : "text-slate-500"
            } nav-text text-xs font-bold uppercase tracking-widest hover:text-primary focus-visible:text-primary`}
          >
            <div className="flex items-center gap-2">
              <span
                className={`block w-12 h-0.5 transition-all duration-500 ease-in-out ${
                  activeSection === "about"
                    ? "bg-slate-100 w-12"
                    : "w-4 bg-slate-500"
                }`}
              ></span>
              <span>About</span>
            </div>
          </a>
        </li>

        <li>
          <a
            href="#education"
            className={`${
              activeSection === "education"
                ? "font-bold text-primary"
                : "text-slate-500"
            } nav-text text-xs font-bold uppercase tracking-widest hover:text-primary focus-visible:text-primary`}
          >
            <div className="mt-4 flex items-center gap-2">
              <span
                className={`block w-12 h-0.5 transition-all duration-500 ease-in-out ${
                  activeSection === "education"
                    ? "bg-slate-100 w-12"
                    : "w-4 bg-slate-500"
                }`}
              ></span>
              <span>EDUCATION</span>
            </div>
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className={`${
              activeSection === "projects"
                ? "font-bold text-primary"
                : "text-slate-500"
            } nav-text text-xs font-bold uppercase tracking-widest hover:text-primary focus-visible:text-primary`}
          >
            <div className="mt-4 flex items-center gap-2">
              <span
                className={`block w-12 h-0.5 transition-all duration-500 ease-in-out ${
                  activeSection === "projects"
                    ? "bg-slate-100 w-12"
                    : "w-4 bg-slate-500 "
                }`}
              ></span>
              <span>Projects</span>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
}
