import React, { Component } from 'react';
import Messages from './messages';
import Notifications from './notifications';
class Navbar extends Component {
    state = {
        fullName: null
    }

    async componentDidMount() {
        const res = await fetch('https://inlupp-fa.azurewebsites.net/api/users?firstname=Rasmus&lastname=Lindberg');
        const data = await res.text();
        this.setState({ fullName: data })
    }
    render() {
        return (<nav className="navbar top-navbar col-lg-12 col-12 p-0">
            <div className="container">
                <div className="navbar-menu-wrapper d-flex align-items-center">
                    <ul className="navbar-nav navbar-nav-right">
                        <Messages></Messages>
                        <li className="nav-item dropdown mr-4">
                            <a className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center" id="notificationDropdown" href="#" data-toggle="dropdown">
                                <i className="mdi mdi-bell mx-0"></i>
                            </a>
                            <Notifications></Notifications>
                        </li>
                        <li className="nav-item nav-profile dropdown mr-0 mr-sm-2">
                            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                                <img src="https://via.placeholder.com/40x40" alt="profile" />
                                <span className="nav-profile-name">{this.state.fullName}</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                                <a className="dropdown-item">
                                    <i className="mdi mdi-settings text-primary"></i>
                                    Settings
                                </a>
                                <a className="dropdown-item">
                                    <i className="mdi mdi-logout text-primary"></i>
                                    Logout
                                </a>
                            </div>
                        </li>
                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="horizontal-menu-toggle">
                        <span className="mdi mdi-menu"></span>
                    </button>
                </div>
            </div>
        </nav>);
    }
}

export default Navbar;