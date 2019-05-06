import React, { Component } from 'react'
import { connect } from 'react-redux';

import { signIn } from '../../redux/actions/authAction'
import { Redirect } from 'react-router-dom';
// import '../css/SignIn.css'
class SignIn extends Component {
  state = {
    email: "",
    password: ""
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  render() {
    const { authError } = this.props.auth;
    const { uid } = this.props;
    if (uid) {
      return <Redirect to='/' />
    }
    return (
      <div id="login">
        <h3 className="text-center text-white pt-5">Login form</h3>
        <div className="container">
          <div id="login-row" className="row justify-content-center align-items-center">
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form id="login-form" className="form" onSubmit={this.handleSubmit}>
                  <h3 className="text-center text-info">Login</h3>
                  <div className="form-group">
                    <label htmlFor="email" className="text-info">Email:</label><br />
                    <input type="text" onChange={this.handleChange} placeholder="Your Email *" id="email" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="text-info">Password:</label><br />
                    <input type="password" onChange={this.handleChange} placeholder="Your Password *" id="password" className="form-control" />
                  </div>
                  <div className="form-group">
                    <input type="submit" name="submit" className="btn btn-info btn-md" value="Login" />
                  </div>
                  <div className="text-warning text-center">{authError}</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth,
    uid: state.firebase.auth.uid
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signIn: (crend) => {
      dispatch(signIn(crend))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);