import React, { Component } from 'react'
class LineAdd extends Component {

  render() {

    const { lineLeft, lineTop, lineLength, type } = this.props;
    const width = 2;
    var LineStyle = {}
    if (type === 'H') {
      LineStyle = {
        position: "absolute",
        left: parseInt(lineLeft),
        top: parseInt(lineTop),
        width: lineLength,
        height: width,
        zIndex: 1,
        backgroundColor: 'limegreen'
      }
    } else {
      LineStyle = {
        position: "absolute",
        left: parseInt(lineLeft),
        top: parseInt(lineTop),
        width: width,
        height: lineLength,
        zIndex: 1,
        backgroundColor: 'limegreen'
      }
    }
    return (
      <div style={LineStyle}>
      </div>
    )
  }
}

export default (LineAdd)