import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LinkSigneInSignOut from './link/LinkSigneInSignOut'
import LinkUser from './link/LinkUser'
import LinkScada from './link/LinkScada';
class Nav extends Component {
    render() {
        const { UID } = this.props;
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#1565c0 ' }}>
                    <NavLink className="navbar-brand" to='/'>OMRON</NavLink>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                        <ul className="navbar-nav mt-2 mt-lg-0">
                            {UID ? <LinkScada/> : ''}
                            {!UID ? <LinkSigneInSignOut /> : <LinkUser />}
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