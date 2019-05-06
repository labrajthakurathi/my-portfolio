import React from "react";
import pro1 from "./project1.png";

export default function ProjectCard(props) {
  return (
    <div className="m-1 container-fluid">
      <div className="text-center text-light card-text">
        <small>{props.name}</small>
      </div>

      <div className="border1 p-0 m-0">
        <div className="card-body p-0 m-0">
          <img src={props.img} alt="whats up" className="img-fluid" />
        </div>
      </div>
      <div className="d-flex justify-content-center  ">
        <a
          href={props.link}
          target="bling"
          className="btn btn-info py-2 px-5 btn-margin"
        >
          Visit Website <i className="far fa-arrow-alt-circle-right " />
        </a>
      </div>
    </div>
  );
}
