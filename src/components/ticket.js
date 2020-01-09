import React, { Component } from 'react';
class Ticket extends Component {
    state = {

    }

    getInitials = (name) => {
        var names = name.split(" ");
        var initials = [];
        let index = 0;
        names.forEach(word => {
            initials[index] = word[0].toUpperCase();
            index++;
        });
        return initials.join("");
    }
    getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {
        return (
            <tr>
                <td className="pl-0">
                    <div style={{ backgroundColor: this.getRandomColor() }} className="icon-rounded-primary icon-rounded-md">
                        <h4 className="font-weight-medium">{this.getInitials(this.props.fullName)}</h4>
                    </div>
                </td>
                <td>
                    <p className="mb-0">{this.props.fullName}</p>
                    <p className="text-muted mb-0">{this.props.location}</p>
                </td>
                <td>
                    <p className="mb-0">{this.props.date}</p>
                    <p className="text-muted mb-0">{this.props.time}</p>
                </td>
                <td>
                    <p className="mb-0">{this.props.project}</p>
                    <p className="text-muted mb-0">{this.props.other}</p>
                </td>
                <td className="pr-0">
                    <i className="mdi mdi-dots-horizontal icon-sm cursor-pointer"></i>
                </td>
            </tr >

        );
    }
}

export default Ticket;