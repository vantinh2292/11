import React from "react";
import { Nav } from "shards-react";
import SidebarNavItem from "./SidebarNavItem";
import navItems from './data/sidebar-nav-items'
class SidebarNavItems extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navItems: navItems
    };
  }
  render() {
    return (
      <div className="nav-wrapper">
        <Nav className="nav--no-borders flex-column">
          {this.state.navItems().map((item, idx) => (
            <SidebarNavItem key={idx} item={item}/>
          ))}
        </Nav>
      </div>
    )
  }
}

export default (SidebarNavItems);
