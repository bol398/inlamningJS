import React, { Component } from 'react';
class Projects extends Component {
    state = {}
    async componentDidMount() {
        const res = await fetch('https://inlupp-fa.azurewebsites.net/api/total-projects');
        const data = await res.json();

        this.setState({
            projects: data["projects"],
            growth: data["growth"]
        })

    }
    render() {
        return (<div className="col-md-6 grid-margin stretch-card"><div className="card">
            <div className="card-body">
                <p className="card-title">Projects</p>
                <div className="d-flex flex-wrap align-items-baseline">
                    <h2 className="mr-3">{this.state.projects}%</h2>
                    <i className="mdi mdi-arrow-up mr-1 text-success"></i><span><p className="mb-0 text-success font-weight-medium">+{this.state.growth}%</p></span>
                </div>
                <p className="mb-0 text-muted">Total users world wide</p>
            </div>
            <canvas id="projects-chart"></canvas>
        </div></div>);
    }
}

export default Projects;