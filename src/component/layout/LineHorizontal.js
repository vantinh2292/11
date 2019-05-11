import React, { Component } from 'react'
import { connect } from 'react-redux';
import {actionClickLine} from '../../redux/actions/lineAction'
class LineHorizontal extends Component {
  render() {
    const { left, top, length,i,idRun } = this.props;
    const width = 2;
    const LineStyle = {
      position: "absolute",
      left,
      top,
      width: length,
      height: width,
      zIndex: 1,
      backgroundColor:'limegreen'
    }
    return (
      <div onClick={()=>this.props.actionClickLine({left,top,length,i,idRun})} style={LineStyle}>
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
export default connect(null,mapDispatchToProps)(LineHorizontal)