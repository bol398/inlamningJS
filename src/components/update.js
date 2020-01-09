import React, { Component } from 'react';
class Update extends Component {
    state = {

    }

    render() {
        return (
            <li>
                <h6>{this.props.title}</h6>
                <p className="mt-2">{this.props.message}</p>
                <p className="text-muted mb-4">
                    <i className="mdi mdi-clock-outline"></i>
                    {this.props.time}
                </p>
            </li>

        );
    }
}

export default Update;