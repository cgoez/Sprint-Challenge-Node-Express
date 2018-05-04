import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        {this.state.projects.map(project => {
          return (
            <div>
              <Link
                to={{
                  pathname: `/${project.id}`,
                  state: { viewProject: project }
                }}
              >
                {project.name}
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
