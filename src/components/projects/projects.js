import React from "react";
import pro1 from "./project1.png";
import ProjectCard from "./projectCards";

import { ProgressBar } from "react-bootstrap";

export default function Projects(props) {
  return (
    <div className="hi  container-fluid">
      <div className="text-center text-light p-2">
        {" "}
        <b>PROJECTS</b>
      </div>
      <div className="row px-5 py-3 ">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 p-0  container-fluid">
          <ProjectCard name="Datgurkhas.com" link="https://datagurkhas.com/" />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 p-0  container-fluid ">
          <ProjectCard name="Subhavarya.com" link="#" />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 p-0  container-fluid ">
          <ProjectCard name="Redchilli food truck" link="#" />
        </div>
      </div>
    </div>
  );
}
