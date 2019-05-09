import React, { Component } from 'react'
import { connect } from 'react-redux';
import {actionForceRunClick} from '../../redux/actions/forceElementAction'
import {actionForceStopClick} from '../../redux/actions/forceElementAction'
class ForceElement extends Component {
    render() {
        const modifiTop=parseInt(this.props.top)>50?parseInt(this.props.top)-30:parseInt(this.props.top)+150;
        const ForceElementStyle = {
            position:'absolute',
            top: modifiTop,
            left:parseInt(this.props.left),
            zIndex: 1, 
            width: 250
        };
        return (
            <div id="ForceButton" style={ForceElementStyle}>
                <div id="ForceButton_Text" style={{ fontSize: 25, color: 'red', backgroundColor: 'darkcyan', display: 'flex', justifyContent: 'center' }}>{this.props.nameElement}
                </div>
                <div className="btn-group" style={{ width: 250 }}>
                    <button onClick={this.props.actionForceRunClick} type="button" style={{ width: 70, fontSize: 18 }} className="btn btn-primary">RUN</button>
                    <button type="button" style={{ width: 70, fontSize: 18 }} className="btn btn-success">AUTO</button>
                    <button onClick={this.props.actionForceStopClick} type="button" style={{ width: 70, fontSize: 18 }} className="btn btn-danger">STOP</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        nameElement: state.image.nameElement,
        top: state.image.top,
        left: state.image.left
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actionForceRunClick: () => {
            dispatch(actionForceRunClick())
        },
        actionForceStopClick: () => {
            dispatch(actionForceStopClick())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ForceElement)