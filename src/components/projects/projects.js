import React from "react";
import pro1 from "./project1.png";
import ProjectCard from "./projectCards";
import Fade from "react-reveal/Fade";
import Chilli from "./chilli.png";

import { ProgressBar } from "react-bootstrap";

export default function Projects(props) {
  return (
    <div className="hi  container-fluid  py-4" id="projects">
      <div className="text-center text-light p-2">
        {" "}
        <b>PROJECTS</b>
      </div>

      <div className="row px-5 py-3 ">
        <Fade bottom>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 p-0  container-fluid">
            <ProjectCard
              img={pro1}
              name="Datgurkhas"
              link="https://datagurkhas.com/"
            />
          </div>
        </Fade>
        <Fade bottom>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 p-0  container-fluid ">
            <ProjectCard
              img={Chilli}
              name="Redchilli food truck"
              link="https://redpepperxpress.com/"
            />
          </div>
        </Fade>
        <Fade bottom>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 p-0  container-fluid ">
            <ProjectCard name="Subhavarya" img={pro1} link="#" />
          </div>
        </Fade>
      </div>
    </div>
  );
}
