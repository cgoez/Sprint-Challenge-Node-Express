import React, { Component } from "react";
import axios from "axios";

export default class Project extends Component {
  constructor() {
    super();
    this.state = {
      project: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.getProject(id);
  }

  getProject = id => {
    axios
      .get("http://localhost:5000/api/projects")
      .then(response => {
        let data = response.data.find(function(element) {
          return element.id === id - 1;
        });
        if (data) {
          alert("Project not found");
        } else {
          this.setState({ project: response.data[id - 1] });
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  //   componentWillReceiveProps(newProps) {
  //     if (this.props.match.params.id !== newProps.match.params.id) {
  //       this.getProject(newProps.match.params.id);
  //     }
  //   }

  render() {
    const { name, description } = this.state.project;

    return (
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    );
  }
}
