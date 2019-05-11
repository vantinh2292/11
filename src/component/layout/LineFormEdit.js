import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Col,FormTextarea } from 'shards-react';
import {actionEditLine} from '../../redux/actions/lineAction'
class LineFormEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      left: '',
      top: '',
      length: '',
      idLine: '',
      idRun: '',
      type:''
    }
  }
  componentDidUpdate(prevProps, prevState) {
    // only update chart if the data has changed
    if (prevProps.idLine !== this.props.idLine) {
        this.setState({
            idLine: this.props.idLine,
            length: this.props.editLength,
            left: this.props.editLeft,
            top: this.props.editTop,
            type:this.props.type,
            idRun:this.props.idRun
        })
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
     this.props.actionEditLine(this.state);
  };
  isChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <Col sm="12" md="4" lg="3">
        <form autoComplete="off" key={this.props.idLine} id="login-form" className="form" onSubmit={this.handleSubmit}>
          <h3 className="text-center text-info">EDIT LINE</h3>
          <div className="form-group">
            <label htmlFor="length" className="text-info">Length:</label><br />
            <input defaultValue={this.props.editLength} type="text" onChange={(evt) => { this.isChange(evt) }} placeholder="Length Line *" name="length" className="form-control"/>
          </div>
          <div className="form-group">
            <label htmlFor="left" className="text-info">Left:</label><br />
            <input defaultValue={this.props.editLeft} type="text" onChange={(evt) => { this.isChange(evt) }} placeholder="Left *" name="left" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="top" className="text-info">Top:</label><br />
            <input defaultValue={this.props.editTop} type="text" onChange={(evt) => { this.isChange(evt) }} placeholder="Top *" name="top" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="idLine" className="text-info">IdLine:</label><br />
            <input defaultValue={this.props.idLine} type="text" onChange={(evt) => { this.isChange(evt) }} placeholder="IdLine *" name="idLine" className="form-control"/>
          </div>
          <div className="form-group">
            <label htmlFor="idRun" className="text-info">IdRUN:</label><br />
            <input defaultValue={this.props.idRun} type="text" onChange={(evt) => { this.isChange(evt) }} placeholder="IdRun *" name="idRun" id="idRun" className="form-control"/>
          </div>

          <div className="form-group" style={{ width: '100%' }}>
            <input style={{ width: '100%' }} type="submit" name="submit" className="btn btn-info btn-md" value="Edit Data" />
          </div>
        </form>
      </Col>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    editLeft: state.line.editLine.editLeft,
    editTop: state.line.editLine.editTop,
    editLength: state.line.editLine.editLength,
    idLine: state.line.editLine.idLine,
    idRun: state.line.editLine.idRun,
    type:state.line.editLine.type,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actionEditLine: (item) => {
      dispatch(actionEditLine(item))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LineFormEdit)