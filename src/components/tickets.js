import React, { Component } from 'react';
import Ticket from './ticket.js';
class Tickets extends Component {
    state = {
        tickets: []
    }
    async componentDidMount() {
        const res = await fetch('https://inlupp-fa.azurewebsites.net/api/tickets');
        const data = await res.json();

        var ticketArray = [];


        for (let index = 0; index < data[1]["tickets"].length; index++) {
            ticketArray[index] = data[1]["tickets"][index];
        }


        this.setState({ tickets: ticketArray })




    }



    createTickets = () => {




        var table = [];
        var tickets = [];
        for (let index = 0; index < this.state.tickets.length; index++) {
            var date = this.state.tickets[index]["date"].split(",")[0];
            var time = this.state.tickets[index]["date"].split(",")[1];
            tickets.push(
                <Ticket
                    fullName={this.state.tickets[index]["name"]}
                    location={this.state.tickets[index]["city"]}
                    date={date}
                    time={time}
                    project={this.state.tickets[index]["project"]}
                    other={this.state.tickets[index]["city"]}
                ></Ticket>
            )
        }
        table.push(<tbody>{tickets}</tbody>);

        return table;



    }
    render() {
        return (<div className="col-xl-8 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-md-end flex-wrap">
                        <p className="card-title">Tickets</p>
                        <div className="dropdown mb-3 mb-md-0">
                            <button className="btn btn-sm btn-outline-light dropdown-toggle text-dark" type="button" id="dropdownMenuDate1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                2018
                            </button>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuDate1">
                                <a className="dropdown-item" href="#">2015</a>
                                <a className="dropdown-item" href="#">2016</a>
                                <a className="dropdown-item" href="#">2017</a>
                                <a className="dropdown-item" href="#">2018</a>
                            </div>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table tickets-table mb-2">
                            <thead>
                                <th className="text-muted pl-0">
                                    Name
              </th>
                                <th></th>
                                <th className="text-muted">
                                    Date
              </th>
                                <th className="text-muted">
                                    Projects
              </th>
                            </thead>
                            {this.createTickets()}
                        </table>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default Tickets;