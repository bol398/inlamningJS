import React, { Component } from 'react';
import Notification from "./notification.js"
class Notifications extends Component {
    state = {
        notifications: []
    }

    async componentDidMount() {
        const res = await fetch('https://inlupp-fa.azurewebsites.net/api/notifications');
        const data = await res.json();

        var notificationArray = [];


        for (let index = 0; index < data.length; index++) {
            notificationArray[index] = data[index];
        }

        this.setState({ notifications: notificationArray })
    }


    createNotifications = () => {
        var table = [];
        var notifications = [];
        for (let index = 0; index < this.state.notifications.length; index++) {
            notifications.push(
                <Notification
                    subtitle={this.state.notifications[index]["subtitle"]}
                    title={this.state.notifications[index]["title"]}
                ></Notification>
            )
        }
        table.push(<tbody>{notifications}</tbody>);

        return table;



    }

    render() {
        return (<div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
            <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
            {this.createNotifications()}
        </div>
        );
    }
}

export default Notifications;