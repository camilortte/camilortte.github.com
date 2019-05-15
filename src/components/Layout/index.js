import React from "react"
import './scss/base.scss';
import Footer from "./Footer/index";
import Nav from "./Nav/index";


class Layout extends React.Component {
  render() {
    const { location, children } = this.props;

    return (
      <div id="layout" className="pure-g">

        <div className="sidebar pure-u-1 pure-u-md-6-24">
          <Nav location={location} />          
        </div>

        
        <div className="content pure-u-1 pure-u-md-18-24">    
          <main>{children}</main>         
          <Footer />
        </div>

      </div>
    )
  }
}

export default Layout

