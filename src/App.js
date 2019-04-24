import React, { Component } from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";

class App extends Component {
  render() {
    return (
      <div className="App ">
        <Header />
        <Landing />
        <div className="p-5 text-center">
          <h2>Site Under construction</h2>
        </div>
      </div>
    );
  }
}

export default App;
