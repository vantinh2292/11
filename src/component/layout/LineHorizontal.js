import React, { Component } from 'react'

export default class LineHorizontal extends Component {
  render() {
    const { left, top, length } = this.props;
    console.log(left)

    const width = 2;
    const LineStyle = {
      position: "absolute",
      left,
      top,
      width: length,
      height: width,
      zIndex: 1,
      backgroundColor:'green'
    }
    return (
      <div style={LineStyle}>
        {/* <svg height={width} width={length}>
          <line x1={0} y1={0} x2={length} y2={0} style={{ stroke: 'rgb(50,205,50)', strokeWidth: width }} />
        </svg> */}
      </div>


    )
  }
}
