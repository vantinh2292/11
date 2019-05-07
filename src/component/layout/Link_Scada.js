import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
class Link_Scada extends Component {
    render() {
        // const { profileUser, signOut } = this.props;
        // console.log('initial', profileUser);
        return (
            <div>
                <NavLink className="nav-link" to='/concrete'>MIXING</NavLink>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return{
        nameUser:state.firebase.auth.displayName
    }
}

export default connect(mapStateToProps)(Link_Scada);