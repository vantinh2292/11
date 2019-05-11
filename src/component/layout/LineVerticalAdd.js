import React, { Component } from 'react'
class LineVerticalAdd extends Component {
  render() {
    const { lineLeft, lineTop, lineLength } = this.props;
    const width = 2;
    var LineStyle = {
      position: "absolute",
      left: parseInt(lineLeft),
      top: parseInt(lineTop),
      width: width,
      height: lineLength,
      zIndex: 1,
      backgroundColor:'limegreen'
    }
    return (
      <div style={LineStyle}>
      </div>
    )
  }
}
export default (LineVerticalAdd)