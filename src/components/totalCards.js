import React, { Component } from 'react';
import TotalSales from './totalCards/totalSales';
import TotalPurchases from './totalCards/totalPurchases';
import TotalOrders from './totalCards/totalOrders';
import TotalGrowth from './totalCards/totalGrowth';
class TotalCards extends Component {
    state = {}
    render() {
        return (<div className="row">
            <TotalSales></TotalSales>
            <TotalPurchases></TotalPurchases>
            <TotalOrders></TotalOrders>
            <TotalGrowth></TotalGrowth>
        </div>);
    }
}

export default TotalCards;