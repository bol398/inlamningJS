import React, { Component } from 'react';
class SaleReport extends Component {
    state = {
        downloads: null
    }

    async componentDidMount() {
        const res = await fetch('https://inlupp-fa.azurewebsites.net/api/sales-report');
        const data = await res.json();

        this.setState({
            downloads: data["downloads"],
            purchases: data["purchases"],
            users: data["users"],
            growth: data["growth"]
        })
    }

    render() {
        return (<div className="col-xl-9 grid-margin stretch-card">
            <div className="card">
                <div className="row">
                    <div className="col-md-7 col-lg-6 col-xl-7">
                        <div className="card-body h-100 d-flex flex-column">
                            <p className="card-title">Sale report</p>
                            <p className="text-muted mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id beatae sint dolorum quod ducimus quisquam ut minima atque quaerat.</p>
                            <canvas id="sale-report-chart"></canvas>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-6 col-xl-5">
                        <div className="card-body">
                            <p className="card-title">Sales report overview</p>
                            <p className="pb-2 text-muted">Sale information on advertising, exhibitions, market research, online media, customer desires, PR and much more</p>
                            <div className="d-flex flex-wrap justify-content-start mt-3 mr-4">
                                <div className="mr-3">
                                    <p className="mb-0">Downloads</p>
                                    <h4>{this.state.downloads}</h4>
                                </div>
                                <div className="mr-3">
                                    <p className="mb-0">Purchases</p>
                                    <h4>{this.state.purchases}</h4>
                                </div>
                                <div className="mr-3">
                                    <p className="mb-0">Users</p>
                                    <h4>{this.state.users}</h4>
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <i className="mdi mdi-arrow-expand-up mb-0 text-success mr-2 mt-1"></i>
                                <p className="mb-0 text-dark">{this.state.growth}</p>
                            </div>
                            <div className="d-flex flex-wrap mb-5">
                                <button className="btn btn-info mt-3 mr-2">Update</button>
                                <button className="btn btn-outline-light mt-3 text-dark">More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default SaleReport;