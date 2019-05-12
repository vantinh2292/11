import React, { Component } from 'react'
// import ReChartLine from '../ReChartLine';
// import UsersOverview from '../UsersOverview';
import { Col } from 'shards-react';
// import PageTitle from '../../../common/PageTitle'
import SidebarMainNavbar from './SidebarMainNavbar'
import SidebarNavItems from './SidebarNavItems'
export default class MainSideBar extends Component {
  render() {
    return (
      <Col
        tag="aside"
        className="main-sidebar px-0 col-12"
        lg={{ size: 2 }}
        md={{ size: 3 }}
      >
        <SidebarMainNavbar hideLogoText={this.props.hideLogoText} />
        <SidebarNavItems />
      </Col>
    )
  }
}
