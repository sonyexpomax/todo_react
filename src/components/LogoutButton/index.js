import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css';

const LogoutButton = (props) => {
    const {isRequest, signIn} = props;
    return (
        <button className={'btn-sign-in'} disabled={isRequest} onClick={signIn}>Log out</button>
    )
};

LogoutButton.propTypes = {
    //
};

export default LogoutButton;