import React from "react";
import { Navbar, NavbarBrand } from "shards-react";
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class SidebarMainNavbar extends React.Component {
  render() {
    const { hideLogoText } = this.props;
    return (
      <div className="main-navbar">
        <Navbar
          className="align-items-stretch bg-white flex-md-nowrap border-bottom p-0"
          type="light"
        >
          <NavbarBrand 
            className="w-100 mr-0"
            href="#"
            style={{ lineHeight: "25px" }}
          >
            <NavLink className="d-table m-auto" to='/'>
              <div >
                <img
                  id="main-logo"
                  className="d-inline-block align-top mr-1"
                  style={{ maxWidth: "25px" }}
                  src={require("./shards-dashboards-logo.svg")}
                  alt="Shards Dashboard"
                />
                {!hideLogoText && (
                  <span className="d-none d-md-inline ml-1">
                    Dashboard & EXIT
                </span>
                )}
              </div>
            </NavLink>
          </NavbarBrand>
          {/* eslint-disable-next-line */}
          <a
            className="toggle-sidebar d-sm-inline d-md-none d-lg-none"
            onClick={this.handleToggleSidebar}
          >
            <i className="material-icons">&#xE5C4;</i>
          </a>
        </Navbar>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}
export default connect(null, mapDispatchToProps)(SidebarMainNavbar);
