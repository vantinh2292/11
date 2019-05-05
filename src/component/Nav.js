import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark mb-4" style={{ backgroundColor: 'red' }}>
                    <a className="navbar-brand" href="https:google.com">OMRON</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                        <ul className="navbar-nav mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#ssss">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#ddddd">Link</a>
                            </li>
                            
                        </ul>
                    </div>
                </nav>

            </div>
        );
    }
}

export default Nav;