import React, { useState } from "react";

export default function Header() {
  const [display, setDisplay] = useState(null);
  let hideMenu = () => {
    setDisplay("none");
  };
  return (
    <div className="">
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" onMouseEnter={() => setDisplay(null)} />

          <span />
          <span />
          <span />

          <ul
            id="menu"
            onClick={hideMenu}
            style={{ display: display ? "none" : null }}
          >
            <a href="#new">
              <div className="items">
                <div className="text-center text-dark mx-auto bg-warning  icon-1">
                  <i className="fas fa-poll-h " />
                </div>

                <li>
                  <b>Resume</b>
                </li>
              </div>
            </a>
            <div className="items">
              <div className="text-center text-dark mx-auto bg-warning  icon-1">
                <i className="fas fa-briefcase" />
              </div>
              <a href="#">
                <li>Projects</li>
              </a>
            </div>
            <div className="items">
              <div className="text-center text-dark mx-auto bg-warning  icon-1">
                <i className="far fa-lightbulb" />
              </div>
              <a href="#">
                <li className="ml-2">Skills</li>
              </a>
            </div>
            <div className="items">
              <div className="text-center text-dark mx-auto bg-warning  icon-1">
                <i className="fas fa-phone-square" />
              </div>
              <a href="#">
                <li>Contact</li>
              </a>
            </div>

            <div className="items">
              <div className="text-center text-dark mx-auto bg-warning  icon-1">
                <i className="fab fa-linkedin" />
              </div>
              <a href="#" target="_blank">
                <li>LinkedIn</li>
              </a>
            </div>
            <div className="items">
              <div className="text-center text-dark mx-auto bg-warning  icon-1">
                <i className="fab fa-github" />
              </div>
              <a href="#" target="_blank">
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
