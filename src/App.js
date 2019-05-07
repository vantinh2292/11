import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import Nav from './component/layout/Nav';
import Dashboard from './component/dashboard/Dashboard'
import SignIn from './component/auth/SignIn'
import SignUp from './component/auth/SignUp'
import UpdateProfile from './component/auth/UpdateProfile';
import ConcreteMixing from './component/layout/ConcreteMixing';
import Image_Form_Create from './component/layout/Image_Form_Create';
import Label_Form_Create from './component/layout/Label_Form_Create';
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/profile' component={UpdateProfile} />
            <Route path='/concrete' component={ConcreteMixing} />
            <Route path='/pushimage' component={Image_Form_Create} />
            <Route path='/pushlabel' component={Label_Form_Create} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

