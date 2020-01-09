import React, { Component } from 'react';
import Message from "./message.js"
class Messages extends Component {
    state = {
        messages: []
    }

    async componentDidMount() {
        const res = await fetch('https://inlupp-fa.azurewebsites.net/api/messages');
        const data = await res.json();

        var messageArray = [];


        for (let index = 0; index < data.length; index++) {
            messageArray[index] = data[index];
        }

        this.setState({ messages: messageArray })
    }


    createMessages = () => {
        var table = [];
        var messages = [];
        for (let index = 0; index < this.state.messages.length; index++) {
            messages.push(
                <Message
                    from={this.state.messages[index]["from"]}
                    title={this.state.messages[index]["title"]}
                ></Message>
            )
        }
        table.push(<tbody>{messages}</tbody>);

        return table;



    }


    render() {
        return (
            <li className="nav-item dropdown mr-1">
                <a className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown" href="#" data-toggle="dropdown">
                    <i className="mdi mdi-email mx-0"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                    <p className="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
                    {this.createMessages()}
                </div>
            </li>
        );
    }
}

export default Messages;