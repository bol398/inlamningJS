import React, { Component } from 'react';
import Invoice from "./invoice.js"
class Invoices extends Component {
    state = {
        invoices: []
    }
    async componentDidMount() {
        const res = await fetch('https://inlupp-fa.azurewebsites.net/api/open-invoices');
        const data = await res.json();

        var invoiceArray = [];


        for (let index = 0; index < data.length; index++) {
            invoiceArray[index] = data[index];
        }

        this.setState({ invoices: invoiceArray })
    }

    createInvoices = () => {
        var table = [];
        var invoices = [];
        for (let index = 0; index < this.state.invoices.length; index++) {
            invoices.push(
                <Invoice
                    number={this.state.invoices[index].invoice}
                    customer={this.state.invoices[index].customer}
                    shipping={this.state.invoices[index].shipping}
                    currency={this.state.invoices[index].currency}
                    bestPrice={this.state.invoices[index].bestPrice}
                    purchasedPrice={this.state.invoices[index].purchasedPrice}
                    status={this.state.invoices[index].status}
                ></Invoice>
            )
        }
        table.push(<tbody>{invoices}</tbody>);

        return table;



    }


    render() {
        return (<div className="col-md-12">
            <div className="card">
                <div className="card-body">
                    <p className="card-title">Open Invoices</p>
                    <div className="row">
                        <div className="col-md-12">
                            <p className="text-muted mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, quibusdam eum, totam ut minus dolor eaque alias ratione repellat voluptate, libero beatae nobis facere quod. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque harum maxime quaerat quasi earum totam consectetur eius quisquam deleniti et.</p>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr className="border-top-0">
                                    <th className="text-muted">Invoice</th>
                                    <th className="text-muted">Customer</th>
                                    <th className="text-muted">Ship</th>
                                    <th className="text-muted">Best Price</th>
                                    <th className="text-muted">Purchsed Price</th>
                                    <th className="text-muted">Status</th>
                                </tr>
                            </thead>
                            {this.createInvoices()}
                        </table>
                    </div>
                </div>
            </div>
        </div >);
    }
}

export default Invoices;