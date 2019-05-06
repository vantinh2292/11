import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { signOut } from '../../redux/actions/authAction'
class Link_User extends Component {
    render() {
        // const { profileUser, signOut } = this.props;
        // console.log('initial', profileUser);
        return (
            <ul className="right">
                <div className="btn-group">
                    <button 
                    type="button" 
                    className="btn btn-info dropdown-toggle" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                    >
                        {this.props.nameUser}
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                        <button className="dropdown-item" onClick={this.props.signOut}>Log Out</button>
                        <NavLink className="dropdown-item" to='/profile'>Update Profile</NavLink>
                        <div className="dropdown-divider"></div>
                    </div>
                </div>
            </ul>
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
        signOut: () => {
            dispatch(signOut())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Link_User);