import React, { Component } from 'react'

export default class Image extends Component {
    render() {
        const imageStyle = {
            position:'absolute',
            top: parseInt(this.props.top),
            left:parseInt(this.props.left)
        };
    return (
            <img alt="image" src={this.props.url} style={imageStyle}/>
        )
    }
}
