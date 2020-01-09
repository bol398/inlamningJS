import React, { Component } from 'react';
class Sales extends Component {
    state = {}
    render() {
        return (<div className="col-xl-6 grid-margin stretch-card"><div className="card">
            <div className="card-body">
                <p className="card-title">Total Sales</p>
                <p className="text-muted">Audience to which the users belonged while on the current date Audience to which the users belonged while on the current date Audience to which the users belonged while on the current date </p>
                <div className="d-flex flex-wrap mb-4 mt-4 pb-4">
                    <div className="mr-4 mr-md-5">
                        <p className="mb-0">Revenue</p>
                        <h4>13,956</h4>
                    </div>
                    <div className="mr-4 mr-md-5">
                        <p className="mb-0">Returns</p>
                        <h4>27,219</h4>
                    </div>
                    <div className="mr-4 mr-md-5">
                        <p className="mb-0">Queries</p>
                        <h4>03,386</h4>
                    </div>
                    <div className="mr-4 mr-md-5">
                        <p className="mb-0">Invoices</p>
                        <h4>04,739</h4>
                    </div>
                </div>
                <canvas id="total-sales-chart"></canvas>
            </div>
        </div></div>);
    }
}

export default Sales;