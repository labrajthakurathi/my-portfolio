import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Header() {
  const [display, setDisplay] = useState(false);
  let hideMenu = () => {
    setDisplay(!display);
  };

  const initialDisplay = {
    transform: "translate(-100%, 0)"
  };
  const onClickDisplay = {
    transform: "none"
  };
  return (
    <div className="">
      <nav role="navigation ">
        <div id="menuToggle">
          <input type="checkbox" onClick={() => setDisplay(!display)} />

          <span />
          <span />
          <span />

          <ul
            id="menu"
            onClick={hideMenu}
            style={display ? onClickDisplay : initialDisplay}
          >
            <a href="#new">
              <div className="items">
                <div className="text-center text-dark mx-auto   icon-1">
                  <i className="fas fa-poll-h " />
                </div>
                <AnchorLink href="./">
                  <li>
                    <b>Home</b>
                  </li>
                </AnchorLink>
              </div>
            </a>
            <div className="items">
              <div className="text-center text-dark mx-auto  icon-1">
                <i className="fas fa-briefcase" />
              </div>

              <AnchorLink href="#projects">
                <li>Projects</li>
              </AnchorLink>
            </div>
            <div className="items">
              <div className="text-center text-dark mx-auto   icon-1">
                <i className="far fa-lightbulb" />
              </div>

              <AnchorLink href="#skills">
                <li className="ml-2">Skills</li>
              </AnchorLink>
            </div>
            <div className="items">
              <div className="text-center text-dark mx-auto   icon-1">
                <i className="fas fa-phone-square" />
              </div>
              <AnchorLink href="#contact">
                <li>Contact</li>
              </AnchorLink>
            </div>

            <div className="items">
              <div className="text-center text-dark mx-auto icon-1">
                <i className="fab fa-linkedin" />
              </div>
              <a
                href="https://www.linkedin.com/in/lab-raj-thakurathi-845679167"
                target="_blank"
              >
                <li>LinkedIn</li>
              </a>
            </div>
            <div className="items">
              <div className="text-center text-dark mx-auto  icon-1">
                <i className="fab fa-github" />
              </div>
              <a href="https://github.com/lalitthakurathi" target="_blank">
                <li>GitHub</li>
              </a>
            </div>
          </ul>
        </div>
      </nav>
      <div className="logo-wrapper">
        <img src="mainlogo.png" className="img-fluid logo" alt="" />
      </div>
    </div>
  );
}
