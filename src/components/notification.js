import React, { Component } from 'react';
class Notification extends Component {

    render() {
        return (

            <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                    <div className="preview-icon bg-success">
                        <i className="mdi mdi-information mx-0"></i>
                    </div>
                </div>
                <div className="preview-item-content">
                    <h6 className="preview-subject font-weight-normal">{this.props.title}</h6>
                    <p className="font-weight-light small-text mb-0 text-muted">
                        {this.props.subtitle}
                    </p>
                </div>
            </a>

        );
    }
}

export default Notification;