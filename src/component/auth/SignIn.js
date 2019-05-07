import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button, FormCheckbox } from "shards-react";
import { signIn } from '../../redux/actions/authAction'
import { Redirect } from 'react-router-dom';
// import '../css/SignIn.css'
class SignIn extends Component {
  state = {
    email: "",
    password: "",
    checked: false
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
  handleChange1() {
    this.setState({
      checked: !this.state.checked
    });
  }

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

        <div className="example">
          <Button>Primary</Button>
          <Button theme="secondary">Secondary</Button>
          <Button theme="success">Success</Button>
          <Button theme="info">Info</Button>
          <Button theme="warning">Warning</Button>
          <Button theme="danger">Danger</Button>
          <Button theme="light">Light</Button>
          <Button theme="dark">Dark</Button>
        </div>
        <strong className="text-muted d-block mb-2">Toggle Switches</strong>
        <fieldset>
          <FormCheckbox toggle small>
            Default
      </FormCheckbox>
          <FormCheckbox toggle small defaultChecked>
            Checked
      </FormCheckbox>
          <FormCheckbox toggle small disabled>
            Disabled
      </FormCheckbox>
          <FormCheckbox toggle small defaultChecked disabled>
            Disabled Checked
      </FormCheckbox>
        </fieldset>
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