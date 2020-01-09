import React, { Component } from 'react';
class Welcome extends Component {
    state = {
        fullName: null
    }

    async componentDidMount() {
        const res = await fetch('https://inlupp-fa.azurewebsites.net/api/users?firstname=Rasmus&lastname=Lindberg');
        const data = await res.text();
        this.setState({ fullName: data })
    }

    render() {
        return (<div className="row">
            <div className="col-md-12 grid-margin"><div className="card bg-white">
                <div className="card-body d-flex align-items-center justify-content-between">
                    <h4 className="mt-1 mb-1">
                        Hi {this.state.fullName}, Welcome back!
                    </h4>
                </div>
            </div></div>
        </div>);
    }
}

export default Welcome;