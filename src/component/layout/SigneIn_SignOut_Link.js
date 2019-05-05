import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class SignIn_SignOut_Link extends Component {
    render() {
        return (
            <ul className="right">
                <li><NavLink to='/signup'>Signup</NavLink></li>
                <li><NavLink to='/signin'>Signin</NavLink></li>
            </ul>
        )
    }
}
