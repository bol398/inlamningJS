import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <footer className="footer">
                <div className="w-100 clearfix">
                    <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">© 2019 <a href="#" target="_blank">Admin Portal</a>.</span>
                </div>
            </footer>
         );
    }
}
 
export default Footer;