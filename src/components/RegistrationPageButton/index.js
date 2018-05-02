import React from 'react'
import PropTypes from 'prop-types'
import './style.css';

const LoginPageButton = (props) => {
    const {isRequest, signIn} = props;
    return (
        <button className={'btn-reg-in'} disabled={isRequest} onClick={signIn}>Send</button>
    )
};

LoginPageButton.propTypes = {
    //
};

export default LoginPageButton;