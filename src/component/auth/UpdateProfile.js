import React, { Component } from 'react'
import { connect } from 'react-redux';

import { updateProfile } from '../../redux/actions/authAction'
import { Redirect } from 'react-router-dom';
class UpdateProfile extends Component {
    state = {
        displayName: "",
        photoURL: ""
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateProfile(this.state);
        window.location.reload();
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    render() {
        const { authError } = this.props.auth;
        const { uid,dislayName,photoURL } = this.props;
        if (!uid) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <h3 className="text-center text-white pt-5">Login form</h3>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6">
                            <div className="col-md-12">
                                <form className="form" onSubmit={this.handleSubmit}>
                                    <h3 className="text-center text-info">Update Profile</h3>
                                    <div className="form-group">
                                        <label htmlFor="displayName" className="text-info">Name Display:</label><br />
                                        <input defaultValue={dislayName} type="text" onChange={this.handleChange} placeholder="Name Display *" id="displayName" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="photoURL" className="text-info">Link Image:</label><br />
                                        <input defaultValue={photoURL} type="text" onChange={this.handleChange} placeholder="Link your image *" id="photoURL" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" name="submit" className="btn btn-info btn-md" value="Update" />
                                    </div>
                                    <div className="text-warning text-center">{authError}</div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth,
        uid: state.firebase.auth.uid,
        dislayName:state.firebase.auth.displayName,
        photoURL:state.firebase.auth.photoURL,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateProfile: (profile) => {
            dispatch(updateProfile(profile))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);