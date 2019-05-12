import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { pushData } from '../../../redux/actions/imageAction'
class Image_Form_Create extends Component {
  state = {
    src: "",
    left: "",
    top: "",
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.pushData(this.state);
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  render() {
    // const { uid } = this.props;
    const { authError } = this.props.auth;

    return (
      <div>
        <h3 className="text-center text-white pt-5">Create IMAGE</h3>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <div className="col-md-12">
                <form id="login-form" className="form" onSubmit={this.handleSubmit}>
                  <h3 className="text-center text-info">Create Image</h3>
                  <div className="form-group">
                    <label htmlFor="nameImage" className="text-info">NameImage:</label><br />
                    <input type="text" onChange={this.handleChange} placeholder="Name image *" id="src" className="form-control" />
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
    pushData: (newImage) => {
      dispatch(pushData(newImage))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Image_Form_Create)