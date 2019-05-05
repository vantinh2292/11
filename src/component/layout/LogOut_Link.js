import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux';
import {signOut} from '../../redux/actions/authAction'
class LogOut_Link extends Component {
    render() {
    const {profileUser,signOut}=this.props;
    console.log('initial',profileUser);
    return (
            <ul className="right">
                <li><a onClick={signOut}>Log Out</a></li>
                {/* <li ><NavLink to='/' className='btn btn-floating pink lighten-1 tooltipped' data-position="bottom" data-tooltip={profileUser.firstName}>{profileUser.initials}</NavLink></li> */}
            </ul>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    // profileUser:state.firebase.profile
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        signOut: () => {
            dispatch(signOut())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LogOut_Link);