import React, { Component } from 'react'
import { connect } from 'react-redux';
import {actionToggleLabel} from '../../../redux/actions/labelAction'
class Label extends Component {
    handleLabelClick=()=>{
        this.props.actionToggleLabel({
            idLabel:this.props.i,
            text:this.props.text,
            left:this.props.left,
            top:this.props.top
        })
    }
    render() {
        const labelStyle = {
            position:'absolute',
            top: parseInt(this.props.top),
            left:parseInt(this.props.left),
            fontWeight: 'bold',
            fontSize:12
        };
    return (
            <div onClick={this.handleLabelClick} style={labelStyle}>{this.props.text}</div>
        )
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actionToggleLabel: (labelChoise) => {
            dispatch(actionToggleLabel(labelChoise))
        }
    }
}
export default connect(null,mapDispatchToProps)(Label)