import React, { Component } from 'react'

export default class LineHorizontal extends Component {
  render() {
    const {x,y,length}=this.props;
    const width=4;
    const LineStyle = {
      position: "absolute",
      left: x,
      top: y,
      width: length,
      height: width,
      zIndex: 1, 
    }
    return (
      <div style={LineStyle}>
        <svg height={width} width={length}>
       <line x1={0} y1={0} x2={length} y2={0} style={{stroke: 'rgb(50,205,50)', strokeWidth: width}} />
       </svg>
      </div>
      

    )
  }
}
