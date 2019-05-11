import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Col } from 'shards-react';
import { actionAddLineHorizontal } from '../../redux/actions/lineAction'
class LineFormAddHorizontal extends Component {
  state = {
    left: "",
    top: "",
    length: 100
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.actionAddLineHorizontal(this.state);
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  render() {
    return (
      <Col sm="12" md="4" lg="3">
        <form id="login-form" className="form" onSubmit={this.handleSubmit}>
          <h3 className="text-center text-info">ADD LINE</h3>
          <div className="form-group">
            <label htmlFor="nameImage" className="text-info">Length:</label><br />
            <input type="text" onChange={this.handleChange} placeholder="Length Line *" id="length" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="left" className="text-info">Left:</label><br />
            <input type="text" onChange={this.handleChange} placeholder="Left *" id="left" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="top" className="text-info">Top:</label><br />
            <input type="text" onChange={this.handleChange} placeholder="Top *" id="top" className="form-control" />
          </div>

          <div className="form-group" style={{width:'100%'}}>
            <input style={{width:'100%'}} type="submit" name="submit" className="btn btn-info btn-md" value="Add Data" />
          </div>
        </form>
      </Col>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actionAddLineHorizontal: (newImage) => {
      dispatch(actionAddLineHorizontal(newImage))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LineFormAddHorizontal)