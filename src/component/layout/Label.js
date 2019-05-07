import React, { Component } from 'react'

export default class Label extends Component {
    render() {
        const labelStyle = {
            position:'absolute',
            top: parseInt(this.props.top),
            left:parseInt(this.props.left),
            fontWeight: 'bold',
            fontSize:12
        };
    return (
            <div style={labelStyle}>{this.props.text}</div>
        )
    }
}
