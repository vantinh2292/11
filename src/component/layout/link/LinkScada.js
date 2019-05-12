import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { Row } from 'shards-react';

class Link_Scada extends Component {
    render() {
        // const { profileUser, signOut } = this.props;
        // console.log('initial', profileUser);
        return (
            <Row>
                <NavLink className="nav-link" to='/concrete'>MIXING</NavLink>
                <NavLink className="nav-link" to='/report'>REPORT</NavLink>
                <NavLink className="nav-link" to='/chart'>CHART</NavLink>
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

export default connect(mapStateToProps)(Link_Scada);