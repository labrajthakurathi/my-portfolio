import React, { Component } from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Skills from "./components/skills/skills";
import { Helmet } from "react-helmet";
import { ParallaxProvider } from "react-scroll-parallax";

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <div className="App ">
          <Helmet>
            <title>
              {" "}
              Lab raj Thakurathi portfolio lalit thakurathi portfolio labraj
              software engineer front-end-developer
            </title>
          </Helmet>
          <Header />
          <Landing />

          <Skills />
        </div>
      </ParallaxProvider>
    );
  }
}

export default App;
