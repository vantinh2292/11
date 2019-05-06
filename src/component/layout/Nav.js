import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SigneIn_SignOut_Link from './SigneIn_SignOut_Link'
import User_Link from './User_Link'
class Nav extends Component {
    render() {
        const { UID } = this.props;
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark mb-4" style={{ backgroundColor: '#1565c0 ' }}>
                    <NavLink className="navbar-brand" to='/'>OMRON</NavLink>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                        <ul className="navbar-nav mt-2 mt-lg-0">
                            {!UID ? <SigneIn_SignOut_Link /> : <User_Link />}
                            <li className="nav-item active">
                                <a className="nav-link" href="#ssss">Home <span className="sr-only">(current)</span></a>
                            </li>
                        </ul>

                    </div>
                </nav>

            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => ({
    UID: state.firebase.auth.uid
})

export default connect(mapStateToProps)(Nav);