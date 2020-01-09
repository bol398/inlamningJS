import React, { Component } from 'react';
class Message extends Component {
    state = {

    }

    async componentDidMount() {


    }
    render() {
        return (

            <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                    <img src="https://via.placeholder.com/36x36" alt="image" className="profile-pic" />
                </div>
                <div className="preview-item-content flex-grow">
                    <h6 className="preview-subject ellipsis font-weight-normal">{this.props.from}
                    </h6>
                    <p className="font-weight-light small-text text-muted mb-0">
                        {this.props.title}
                    </p>
                </div>
            </a>

        );
    }
}

export default Message;