import React from "react";
import Landing from "./Landing";
import Skills from "./skills/skills";

import Projects from "./projects/projects";
import About from "./about/about.js";
import Contact from "./contact/Contact";
import ScrollableAnchor from "react-scrollable-anchor";

export default function Home() {
  return (
    <div>
      <Landing />
      <About />

      <Skills />
      <ScrollableAnchor id={"projects"}>
        <Projects />
      </ScrollableAnchor>

      <Contact />
    </div>
  );
}
