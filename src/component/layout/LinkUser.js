import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { signOut } from '../../redux/actions/authAction'
import { FormCheckbox } from "shards-react";
import { toggleEditImage,toggleEditLabel,actionToggleAddLine,actionToggleEditLine } from '../../redux/actions/authAction'

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
                        {
                            this.props.idUser === 'S5sPGpvaNuWQXms4iPH8VXo3pu93'?
                                <FormCheckbox toggle small inline
                                    checked={this.props.checkedEditImage}
                                    onChange={() => this.props.toggleEditImage()}>
                                    Edit Image
                                </FormCheckbox>:''
                        }
                        {
                            this.props.idUser === 'S5sPGpvaNuWQXms4iPH8VXo3pu93'?
                                <FormCheckbox toggle small inline
                                    checked={this.props.checkedEditLabel}
                                    onChange={() => this.props.toggleEditLabel()}>
                                    Edit Label
                                </FormCheckbox>:''
                        }
                        {
                            this.props.idUser === 'S5sPGpvaNuWQXms4iPH8VXo3pu93'?
                                <FormCheckbox toggle small inline
                                    checked={this.props.checkedAddLine}
                                    onChange={() => this.props.actionToggleAddLine()}>
                                    Add Line
                                </FormCheckbox>:''
                        }
                        {
                            this.props.idUser === 'S5sPGpvaNuWQXms4iPH8VXo3pu93'?
                                <FormCheckbox toggle small inline
                                    checked={this.props.checkedEditLine}
                                    onChange={() => this.props.actionToggleEditLine()}>
                                    Edit Line
                                </FormCheckbox>:''
                        }

                    </div>
                </div>
            </ul>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        nameUser: state.firebase.auth.displayName,
        idUser: state.firebase.auth.uid,
        checkedEditImage: state.auth.editImage,
        checkedEditLabel: state.auth.editLabel,
        checkedAddLine:state.auth.addLine,
        checkedEditLine:state.auth.editLine,
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        signOut: () => {
            dispatch(signOut())
        },
        toggleEditImage: () => {
            dispatch(toggleEditImage())
        },
        toggleEditLabel: () => {
            dispatch(toggleEditLabel())
        },
        actionToggleAddLine: () => {
            dispatch(actionToggleAddLine())
        },
        actionToggleEditLine: () => {
            dispatch(actionToggleEditLine())
        },
        
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Link_User);