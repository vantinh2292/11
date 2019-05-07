import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { pushDataLabel } from '../../redux/actions/labelAction'
class Label_Form_Create extends Component {
  state = {
    text: "",
    left: "",
    top: "",
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.pushDataLabel(this.state);
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  render() {
    const { uid } = this.props;
    const { authError } = this.props.auth;

    return (
      <div>
        <h3 className="text-center text-white pt-5">Create Label</h3>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <div className="col-md-12">
                <form id="login-form" className="form" onSubmit={this.handleSubmit}>
                  <h3 className="text-center text-info">Create Label</h3>
                  <div className="form-group">
                    <label htmlFor="nameImage" className="text-info">Label:</label><br />
                    <input type="text" onChange={this.handleChange} placeholder="Name Label *" id="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="left" className="text-info">Left:</label><br />
                    <input type="text" onChange={this.handleChange} placeholder="Left *" id="left" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="top" className="text-info">Top:</label><br />
                    <input type="text" onChange={this.handleChange} placeholder="Top *" id="top" className="form-control" />
                  </div>
                  
                  <div className="form-group">
                    <input type="submit" name="submit" className="btn btn-info btn-md" value="Add Data" />
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
    pushDataLabel: (newImage) => {
      dispatch(pushDataLabel(newImage))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Label_Form_Create)