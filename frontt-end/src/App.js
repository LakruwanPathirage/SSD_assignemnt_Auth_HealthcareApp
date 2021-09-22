import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoGingComponent from "./custom_componets/Login";
import Home from "./custom_componets/Home";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <Route
          path="/"
          exact
          strict
          render={() => {
            return <Redirect push to="/login" />;
          }}
        />

        <Route
          path="/home"
          exact
          strict
          render={props => {
            return <Home {...props} />;
          }}
        />

        <Route
          path="/login"
          exact
          strict
          render={props => {
            return <LoGingComponent {...props} />;
          }}
        />
      </Router>
    );
  }
}

export default App;
