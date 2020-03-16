import React from "react";
import { Button } from "react-bootstrap";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center d-flex justify-content-around icon-f ">
            <a href="/resume" title="Resume">
              {" "}
              <i className="fas fa-file-alt p-3 icon-s "></i>
            </a>
            <a
              href="https://github.com/lalitthakurathi"
              title="Git Hub"
              target="blink"
            >
              {" "}
              <i className="fab fa-github p-3  icon-s"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/lab-raj-thakurathi-845679167/"
              title="LinkedIn"
              target="blink"
            >
              <i className="fab fa-linkedin-in p-3 icon-s"></i>
            </a>
            <a
              href="https://twitter.com/ThakurathiLalit"
              title="Twitter"
              target="blink"
            >
              <i className="fab fa-twitter p-3  icon-s"></i>
            </a>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center pt-3">
            <small>&copy; 2019 All RIGHT RESERVED @ Lab Raj Thakurathi</small>
          </div>
        </div>
      </div>
    </div>
  );
}
