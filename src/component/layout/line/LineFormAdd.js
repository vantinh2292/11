import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Col } from 'shards-react';
import {
  actionAddLine,
  actionLineAddLeftChange, actionLineAddTopChange, actionLineAddLengthChange,actionLineAddTypeChange,
  actionMoveLeftDecrease, actionMoveLeftIncrease,
  actionMoveTopDecrease, actionMoveTopIncrease,
  actionLengthDecrease, actionLengthIncrease
} from '../../../redux/actions/lineAction'
class LineFormAdd extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.actionAddLine();
  };
  handleChangeType = (e) => {
    e.preventDefault();
    this.props.actionLineAddTypeChange(e.target.value);
  };
  handleChangeLength = (e) => {
    e.preventDefault();
    this.props.actionLineAddLengthChange(e.target.value);
  };
  handleChangeLeft = (e) => {
    e.preventDefault();
    this.props.actionLineAddLeftChange(e.target.value);
  };
  handleChangeTop = (e) => {
    e.preventDefault();
    this.props.actionLineAddTopChange(e.target.value);
  };
  handleKeyUp=(event)=>{
    if (event.keyCode === 13) {
      this.props.actionAddLine();
    }
  }
  handleKeyPress = (event) => {
    
    if (event.shiftKey ) {//shift
      this.props.actionLengthIncrease()
    }
    if (event.ctrlKey) {//control
      this.props.actionLengthDecrease()
    }
    if (event.keyCode === 37) {//Trai
      this.props.actionMoveLeftDecrease()
    }
    if (event.keyCode === 38) {//Len
      this.props.actionMoveTopDecrease()
    }
    if (event.keyCode === 39) {//Phai
      this.props.actionMoveLeftIncrease()
    }
    if (event.keyCode === 40) {//Xuong
      this.props.actionMoveTopIncrease()
    }
  }
  render() {
    return (
      <Col sm="12" md="4" lg="3">
        <form autoComplete="off" key='AddLineHorizontal' id="login-form" className="form" onSubmit={this.handleSubmit}>
          <h3 className="text-center text-info">ADD LINE</h3>
          <div className="form-group">
            <label htmlFor="nameImage" className="text-info">Length:</label><br />
            <input type="text" onChange={this.handleChangeLength} onKeyDown={this.handleKeyPress} placeholder="Length Line *" id="length" className="form-control" value={this.props.LineLength} />
          </div>
          <div className="form-group">
            <label htmlFor="left" className="text-info">Left:</label><br />
            <input type="text" onChange={this.handleChangeLeft} onKeyDown={this.handleKeyPress} placeholder="Left *" id="left" className="form-control" value={this.props.LineLeft} />
          </div>
          <div className="form-group">
            <label htmlFor="top" className="text-info">Top:</label><br />
            <input type="text" onChange={this.handleChangeTop} onKeyDown={this.handleKeyPress} placeholder="Top *" id="top" className="form-control" value={this.props.LineTop} />
          </div>
          <div className="form-group">
            <label htmlFor="nameImage" className="text-info">TYPE (H_V):</label><br />
            <input type="text" onChange={this.handleChangeType} onKeyDown={this.handleKeyPress} placeholder="Line H_V*" id="type" className="form-control" value={this.props.LineType} />
          </div>

          <div className="form-group" style={{ width: '100%' }}>
            <input style={{ width: '100%' }} type="submit" name="submit" className="btn btn-info btn-md" value="Add Data" />
          </div>
        </form>
      </Col>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    LineLeft: state.line.addLine[0].addLineLeft,
    LineTop: state.line.addLine[0].addLineTop,
    LineLength: state.line.addLine[0].addLineLength,
    LineType:state.line.addLine[0].addLineType
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actionAddLine: () => {
      dispatch(actionAddLine())
    },
    actionLineAddLeftChange: (left) => {
      dispatch(actionLineAddLeftChange(left))
    },
    actionLineAddTopChange: (top) => {
      dispatch(actionLineAddTopChange(top))
    },
    actionLineAddTypeChange: (type) => {
      dispatch(actionLineAddTypeChange(type))
    },
    actionLineAddLengthChange: (length) => {
      dispatch(actionLineAddLengthChange(length))
    },
    actionMoveLeftDecrease: () => {
      dispatch(actionMoveLeftDecrease())
    },
    actionMoveLeftIncrease: () => {
      dispatch(actionMoveLeftIncrease())
    },
    actionMoveTopDecrease: () => {
      dispatch(actionMoveTopDecrease())
    },
    actionMoveTopIncrease: () => {
      dispatch(actionMoveTopIncrease())
    },
    actionLengthDecrease: () => {
      dispatch(actionLengthDecrease())
    },
    actionLengthIncrease: () => {
      dispatch(actionLengthIncrease())
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LineFormAdd)