import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css';

class LogoutButton extends Component{
    onSignOut = (e) => {
        e.preventDefault();
        this.props.signOut();
    };
    render() {
        return (
             <button className={'btn-sign-out'} onClick={this.onSignOut}>Log out</button>
        )
    }
}

LogoutButton.propTypes = {
    singOut: PropTypes.function,
};

export default LogoutButton;