import React, { Component } from "react";
import axios from "axios";

export default class ProjectsList extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    this.getProjects();
  }

  // Get data from my server w00t
  getProjects = () => {
    axios
      .get("http://localhost:5000/api/projects")
      .then(response => {
        this.setState({ projects: response.data });
      })
      .catch(error => {
        console.log("There was an error getting projects.", error);
      });
  };

  render() {
    return (
      <div>
        {this.state.projects.map((project, index) => {
          return (
            <div key={index}>
              {project.name}              
            </div>
          );
        })}
      </div>
    );
  }
}
