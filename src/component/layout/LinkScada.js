import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { Row } from 'shards-react';
import {actionToggleTrueNavPageFull} from '../../redux/actions/navAction'

class Link_Scada extends Component {
    render() {
        // const { profileUser, signOut } = this.props;
        // console.log('initial', profileUser);
        return (
            <Row>
                <NavLink className="nav-link" to='/concrete'>MIXING</NavLink>
                <NavLink onClick={this.props.actionToggleTrueNavPageFull} className="nav-link" to='/chart'>CHART</NavLink>
                <NavLink className="nav-link" to='/'>HOME</NavLink>
            </Row>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return{
        nameUser:state.firebase.auth.displayName
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actionToggleTrueNavPageFull: () => {
            dispatch(actionToggleTrueNavPageFull())
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Link_Scada);