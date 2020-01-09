import React, { Component } from 'react';
class TotalGrowth extends Component {
    state = {}
    async componentDidMount() {
        const res = await fetch('https://inlupp-fa.azurewebsites.net/api/total-growth');
        const data = await res.json();

        this.setState({
            currency: data["currency"],
            amount: data["amount"]
        })
    }
    render() {
        return (
            <div className="col-md-3 grid-margin stretch-card">
                <div className="card border-0 border-radius-2 bg-warning">
                    <div className="card-body">
                        <div className="d-flex flex-md-column flex-xl-row flex-wrap  align-items-center justify-content-between">
                            <div className="icon-rounded-inverse-warning icon-rounded-lg">
                                <i className="mdi mdi-chart-multiline"></i>
                            </div>
                            <div className="text-white">
                                <p className="font-weight-medium mt-md-2 mt-xl-0 text-md-center text-xl-left">Total Growth</p>
                                <div className="d-flex flex-md-column flex-xl-row flex-wrap align-items-baseline align-items-md-center align-items-xl-baseline">
                                    <h3 className="mb-0 mb-md-1 mb-lg-0 mr-1">{this.state.currency}{this.state.amount}</h3>
                                    <small className="mb-0">This month</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default TotalGrowth;