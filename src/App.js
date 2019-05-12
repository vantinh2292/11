import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import Nav from './component/layout/Nav';
import Dashboard from './component/note/Dashboard'
import SignIn from './component/auth/SignIn'
import SignUp from './component/auth/SignUp'
import UpdateProfile from './component/auth/UpdateProfile';
import ConcreteMixing from './component/mixing/ConcreteMixing';
import Image_Form_Create from './component/layout/image/Image_Form_Create';
import Label_Form_Create from './component/layout/label/Label_Form_Create';
import DashboardChart from './component/chart/DashboardChart';
import DashboardReport from './component/report/DashboardReport';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {this.props.openPageFull?'':<Nav />}
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/profile' component={UpdateProfile} />
            <Route path='/concrete' component={ConcreteMixing} />
            <Route path='/pushimage' component={Image_Form_Create} />
            <Route path='/pushlabel' component={Label_Form_Create} />
            <Route path='/chart' component={DashboardChart} />
            <Route path='/report' component={DashboardReport} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  openPageFull:state.navPageFull.openPageFull
})

export default connect(mapStateToProps)(App)
