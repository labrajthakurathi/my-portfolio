import React from "react";
import Landing from "./Landing";
import Skills from "./skills/skills";
import Footer from "./footer.js";

import Projects from "./projects/projects";
import About from "./about/about.js";
import Contact from "./contact/Contact";

export default function Home() {
  return (
    <div>
      <Landing />
      <About />

      <Skills />

      <Projects />

      <Contact />
      <Footer />
    </div>
  );
}
