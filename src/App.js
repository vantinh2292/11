import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Nav from './component/layout/Nav';
import Dashboard from './component/dashboard/Dashboard'
import SignIn from './component/auth/SignIn'
import SignUp from './component/auth/SignUp'
import UpdateProfile from './component/auth/UpdateProfile';
import ConcreteMixing from './component/layout/ConcreteMixing';
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
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

