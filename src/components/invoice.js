import React, { Component } from 'react';
class Invoice extends Component {
    state = {
        statusClassName: ""
    }

    async componentDidMount() {

        var status = this.props.status;

        switch (status) {
            case "Open":
                this.setState({
                    statusClassName: "badge-warning"
                })
                break;
            case "Closed":
                this.setState({
                    statusClassName: "badge-dark"
                })
                break;
            case "Progress":
                this.setState({
                    statusClassName: "badge-success"
                })
                break;
            case "On hold":
                this.setState({
                    statusClassName: "badge-danger"
                })
                break;
        }
    }
    render() {
        return (

            <tr>
                <td>{this.props.number}</td>
                <td>{this.props.customer}</td>
                <td>{this.props.shipping}</td>
                <td className="font-weight-bold">{this.props.currency}{this.props.bestPrice}</td>
                <td>{this.props.currency}{this.props.purchasedPrice}</td>
                <td><div className={"badge badge-fw " + this.state.statusClassName + ''}>{this.props.status}</div></td>
            </tr>

        );
    }
}

export default Invoice;