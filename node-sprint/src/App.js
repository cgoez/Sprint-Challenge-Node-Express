import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";

// components
import ProjectsList from "./components/ProjectsList";
import Project from "./components/Project";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Node Projects</h1>
        </header>
        <Switch>
          <Route exact path="/project" component={ProjectsList} />
          <Route path="/project/:id" component={Project} />
          <Route component={() => <h2>No projects found here!</h2>} />
        </Switch>
      </div>
    );
  }
}

export default App;
