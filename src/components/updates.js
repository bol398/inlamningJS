import React, { Component } from 'react';
import Update from './update.js';
class Updates extends Component {
    state = { updatelist: [] }


    async componentDidMount() {
        const res = await fetch('https://inlupp-fa.azurewebsites.net/api/updates');
        const data = await res.json();

        var updateArray = [];


        for (let index = 0; index < data.length; index++) {
            updateArray[index] = data[index];
        }


        this.setState({ updatelist: updateArray })

    }



    createList = () => {
        var table = [];
        var updates = [];
        for (let index = 0; index < this.state.updatelist.length; index++) {
            updates.push(
                <Update
                    title={this.state.updatelist[index]["title"]}
                    time={this.state.updatelist[index]["time"]}
                    message={this.state.updatelist[index]["message"]}
                ></Update>
            )
        }
        table.push(<ul className="bullet-line-list mt-4">{updates}</ul>);

        return table;



    }


    render() {
        return (<div className="col-xl-4 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <p className="card-title">Updates</p>
                    {this.createList()}
                </div>
            </div>
        </div>);
    }
}

export default Updates;