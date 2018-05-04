import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";

// components
import ProjectsList from "./components/ProjectsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">List of projects!</p>
        <Route exact path="/" component={ProjectsList} />
      </div>
    );
  }
}

export default App;
