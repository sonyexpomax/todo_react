import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css';
import {logoutAction} from "../../redux/actions/authentificate";


class LogoutButton extends Component{
    onSignOut = (e) => {
        e.preventDefault();
        this.props.dispatch(logoutAction());
    };
    render() {
        return (
             <button className={'btn-sign-out'} onClick={this.onSignOut}>Log out</button>
        )
    }
}

LogoutButton.propTypes = {
    //
};

export default LogoutButton;