import React from "react";
import Particles from "react-particles-js";

export default function Landing() {
  return (
    <div className="landing">
      <Particles
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800
              }
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }}
        style={{
          width: "50%"
        }}
      />
      <div className="landing-overlay">
        <div className="overlay">
          <h2 className=" lead text-light ">
            For your clean and user engaging UI,contact me.{" "}
            <small>
              Expect the best. Never settle for less, because I code for
              PASSION.
            </small>
          </h2>
          <button className="btn btn-outline-light py-2 px-5">
            See My Work
          </button>
        </div>
      </div>
    </div>
  );
}
