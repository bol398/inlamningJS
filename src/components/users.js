import React, { Component } from 'react';
class Users extends Component {
    state = {
        totalusers: []
    }

    async componentDidMount() {
        const res = await fetch('https://inlupp-fa.azurewebsites.net/api/total-users');
        const data = await res.json();
        this.setState({ totalusers: data })
    }
    render() {
        return (<div className="col-md-6 grid-margin stretch-card"> <div className="card">
            <div className="card-body">
                <p className="card-title">Users</p>
                <div className="d-flex flex-wrap align-items-baseline">
                    <h2 className="mr-3">{this.state.totalusers["users"]}</h2>
                    <i className="mdi mdi-arrow-up mr-1 text-danger"></i><span><p className="mb-0 text-danger font-weight-medium">+{this.state.totalusers["growth"]}%</p></span>
                </div>
                <p className="mb-0 text-muted">Total users world wide</p>
            </div>
            <canvas id="users-chart"></canvas>
        </div>
        </div >);
    }
}

export default Users;