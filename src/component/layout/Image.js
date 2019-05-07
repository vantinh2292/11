import React, { Component } from 'react'
import { connect } from 'react-redux';
import {actionToggleImage} from '../../redux/actions/imageAction'
class Image extends Component {
    handleImageClick=()=>{
        this.props.actionToggleImage({
            idImage:this.props.i,
            src:this.props.src,
            left:this.props.left,
            top:this.props.top
        })
    }
    render() {
        const imageStyle = {
            position:'absolute',
            top: parseInt(this.props.top),
            left:parseInt(this.props.left)
        };
        
    return (
            <img onClick={this.handleImageClick} alt="image" src={this.props.url} style={imageStyle}/>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    
})
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actionToggleImage: (editImage) => {
            dispatch(actionToggleImage(editImage))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Image)