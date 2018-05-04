import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";

// components
import ProjectsList from "./components/ProjectsList";
import Project from "./components/Project";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">Node Projects</p>
        <Route exact path="/" component={ProjectsList} />
        <Route exact path="/:id" component={Project} />
      </div>
    );
  }
}

export default App;
