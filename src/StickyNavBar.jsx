import React from "react";
import "./StickyNavBar.scss";
import { useState } from "react";
import me from "./assets/me.png";

export default function StickyNavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
    setIsActive(!isActive);
    // document.body.style.overflow = isNavOpen ? "auto" : "hidden";
  };

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className={`nav-wrapper`} id="NavBar">
        <nav className="navbar">
          <div className="w-fit-content flex items-center">
            <img src={me} alt="Company Logo" />
            <h3 className="text-xl whitespace-nowrap">Anthony's Website</h3>
          </div>

          <div className="item" onClick={handleToggle}>
            <div className={`burger six ${isActive ? "activated" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <ul className={`nav no-search ${isNavOpen ? "mobile-nav" : ""}`}>
            <li
              className="nav-item"
              onClick={() => {
                handleToggle();
                scrollToElement("home");
              }}
            >
              <p>Home</p>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                handleToggle();
                scrollToElement("about");
              }}
            >
              <p>About Me</p>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                handleToggle();
                scrollToElement("projects");
              }}
            >
              <p>Projects</p>
            </li>

            <li
              className="nav-item"
              onClick={() => {
                handleToggle();
                scrollToElement("ContactForm");
              }}
            >
              <p>Contact Me</p>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
