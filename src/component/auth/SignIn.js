import React, { Component } from 'react'
import { connect } from 'react-redux';

import { signIn } from '../../redux/actions/authAction'
import { Redirect } from 'react-router-dom';
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
    // const { authError } = this.props.auth;
    // const { uid } = this.props;
    // if (uid) {
    //   return <Redirect to='/' />
    // }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="while">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
          <div className="center red-text">
            {/* <div className="container center">{authError ? <h4>{authError}</h4> : ""}</div> */}
          </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    // auth: state.auth,
    // uid: state.firebase.auth.uid
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