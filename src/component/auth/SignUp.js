import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../redux/actions/authAction'
class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  render() {
    const { uid } = this.props;
    const { authError } = this.props.auth;
    if (uid) {
      return <Redirect to='/' />
    }
    return (
      <div>
        <h3 className="text-center text-white pt-5">Sign Up</h3>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <div className="col-md-12">
                <form id="login-form" className="form" onSubmit={this.handleSubmit}>
                  <h3 className="text-center text-info">Login</h3>
                  <div className="form-group">
                    <label htmlFor="firstName" className="text-info">First Name:</label><br />
                    <input type="text" onChange={this.handleChange} placeholder="Your First Name *" id="firstName" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName" className="text-info">Last Name:</label><br />
                    <input type="text" onChange={this.handleChange} placeholder="Your Last Name *" id="lastName" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="text-info">Email:</label><br />
                    <input type="text" onChange={this.handleChange} placeholder="Your Email *" id="email" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="text-info">Password:</label><br />
                    <input type="password" onChange={this.handleChange} placeholder="Your Password *" id="password" className="form-control" />
                  </div>
                  <div className="form-group">
                    <input type="submit" name="submit" className="btn btn-info btn-md" value="Sign Up" />
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
    uid: state.firebase.auth.uid,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signUp: (newUser) => {
      dispatch(signUp(newUser))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)