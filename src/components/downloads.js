import React, { Component } from 'react';
class Downloads extends Component {
    state = {
        downloads: []
    }

    async componentDidMount() {
        const res = await fetch('https://inlupp-fa.azurewebsites.net/api/downloads');
        const data = await res.json();
        this.setState({
            downloadsOffline: data[0]["offlineAmount"],
            downloadsOnline: data[1]["onlineAmount"]
        })
    }
    render() {
        return (<div className="col-md-12 stretch-card"><div className="card">
            <div className="card-body">
                <p className="card-title">Downloads</p>
                <p className="text-muted mb-2">Watching ice melt. This is fun. Only you could make those words cute.</p>
                <div className="row mt-4">
                    <div className="col-md-6 stretch-card">
                        <div className="row d-flex align-items-center">
                            <div className="col-6">
                                <div id="offlineProgress"></div>
                            </div>
                            <div className="col-6 pl-0">
                                <p className="mb-0">Offline</p>
                                <h2>{this.state.downloadsOffline}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 stretch-card mt-4 mt-md-0">
                        <div className="row d-flex align-items-center">
                            <div className="col-6">
                                <div id="onlineProgress"></div>
                            </div>
                            <div className="col-6 pl-0">
                                <p className="mb-0">Online</p>
                                <h2>{this.state.downloadsOnline}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></div>);
    }
}

export default Downloads;