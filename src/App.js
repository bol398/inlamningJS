import React from 'react';
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Users from './components/users';
import Projects from './components/projects';
import Welcome from './components/welcome';
import Downloads from './components/downloads';
import Sales from './components/sales';
import TotalCards from './components/totalCards';
import Tickets from './components/tickets';
import Updates from './components/updates';
import Distribution from './components/distribution';
import SaleReport from './components/saleReport';
import Invoices from './components/invoices';

function App() {
  return (
    <div>
      <div className="container-scroller">
        <div className="horizontal-menu">
          <Navbar></Navbar>
        </div>
        <div className="container-fluid page-body-wrapper">
          <div className="main-panel">
            <div className="content-wrapper">
              <Welcome></Welcome>
              <div className="row">
                <div className="col-xl-6 grid-margin">
                  <div className="row">
                    <Users></Users>
                    <Projects></Projects>
                  </div>
                  <div className="row">
                    <Downloads></Downloads>
                  </div>
                </div>
                <Sales></Sales>
              </div>
              <TotalCards></TotalCards>
              <div className="row">
                <Tickets></Tickets>
                <Updates></Updates>
              </div>
              <div className="row">
                <Distribution></Distribution>
                <SaleReport></SaleReport>
              </div>
              <div className="row">
                <Invoices></Invoices>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
