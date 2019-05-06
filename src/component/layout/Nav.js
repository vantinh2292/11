import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Link_SigneIn_SignOut from './Link_SigneIn_SignOut'
import Link_User from './Link_User'
import Link_Scada from './Link_Scada';
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
                            {UID ? <Link_Scada/> : ''}
                            <NavLink className="navbar-brand" to='/'>Home</NavLink>
                            {!UID ? <Link_SigneIn_SignOut /> : <Link_User />}
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