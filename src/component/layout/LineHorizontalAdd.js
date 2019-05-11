import React, { Component } from 'react'
import { connect } from 'react-redux';
class LineHorizontalAdd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      left: 200,
      top: 200
    }
  }
  componentDidUpdate(prevProps, prevState) {
    // only update chart if the data has changed
    if (prevProps.lineLeft !== this.props.lineLeft) {
        this.setState({
          left:parseInt(this.props.lineLeft)
        })
    }
  }
  
  render() {

    const { lineLeft, lineTop, lineLength } = this.props;
    const width = 2;
    var LineStyle = {
      position: "absolute",
      left: parseInt(lineLeft),
      top: parseInt(lineTop),
      width: lineLength,
      height: width,
      zIndex: 1,
      backgroundColor:'green'
    }
    return (
      <div style={LineStyle}>
        {/* <svg height={width} width={lineLength}>
          <line x1={0} y1={0} x2={lineLength} y2={0} style={{ stroke: 'rgb(50,205,50)', strokeWidth: width }} />
        </svg> */}
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
  }
}
export default connect(mapStateToProps)(LineHorizontalAdd)