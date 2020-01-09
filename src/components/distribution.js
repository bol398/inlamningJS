import React, { Component } from 'react';
class Distribution extends Component {
    state = {}
    render() {
        return (<div className="col-xl-3 grid-margin stretch-card">
            <div className="card">
                <div className="card-body pb-0">
                    <p className="card-title mb-xl-0">Distribution</p>
                </div>
                <canvas id="distribution-chart"></canvas>
                <div className="card-body">
                    <div id="distribution-legend" className="distribution-chart-legend pt-4 pb-3"></div>
                    <button className="btn btn-outline-light text-dark d-block mx-auto mt-2">View More</button>
                </div>
            </div>
        </div>);
    }
}

export default Distribution;