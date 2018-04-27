import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css';

const LoginPageButton = (props) => {
    const {isRequest, signIn} = props;
    return (
        <button className={'btn-sign-in'} disabled={isRequest} onClick={signIn}>Sign In</button>
    )
};

LoginPageButton.propTypes = {
    //
};

export default LoginPageButton;