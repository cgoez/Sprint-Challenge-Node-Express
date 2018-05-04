import React, {Component} from 'react'

export default class Project extends Component {
    constructor() {
        super()
        this.state = {
            project: {}
        }
    }

    // pass project prop from ProjectsList
    componentDidMount() {
        this.setState({ project: this.props.viewProject})
    }

    render() {
        const {name, description, completed} = this.props.viewProject
    }
}