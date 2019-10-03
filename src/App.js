import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Thanks from "./components/Thanks";
import Resume from "./components/Resume";

import { Helmet } from "react-helmet";
import { ParallaxProvider } from "react-scroll-parallax";

class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
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
          <Router>
            <div>
              <Header />
              <Switch>
                <Route exact path={"/"} component={Home} />
                <Route exact path={"/thanks"} component={Thanks} />
                <Route exact path={"/resume"} component={Resume} />
              </Switch>
            </div>
          </Router>
        </div>
      </ParallaxProvider>
    );
  }
}

export default App;
