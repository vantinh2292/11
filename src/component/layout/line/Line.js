import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actionClickLine } from '../../../redux/actions/lineAction'
class Line extends Component {
  render() {
    const { left, top, length, i, idRun, type } = this.props;
    const width = 2;
    const LineStyle1 = {
      position: "absolute",
      left: parseInt(left),
      top: parseInt(top),
      width: parseInt(length),
      height: width,
      zIndex: 1,
      backgroundColor: 'limegreen'}

      const LineStyle2 = {
        position: "absolute",
        left: parseInt(left),
        top: parseInt(top),
        width: width,
        height: parseInt(length),
        zIndex: 1,
        backgroundColor: 'limegreen'
      }
    return(
      <div onClick = {()=> this.props.actionClickLine({ left, top, length, i, idRun, type })} style = { type==='H'?LineStyle1:LineStyle2 }>
      </div>


    )
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actionClickLine: (item) => {
      dispatch(actionClickLine(item))
    }
  }
}
export default connect(null, mapDispatchToProps)(Line)