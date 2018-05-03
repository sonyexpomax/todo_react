import React from 'react'
import PropTypes from 'prop-types'
import './style.css';

const LoginPageButton = (props) => {
    const {isRequest, signIn} = props;
    return (
        <button className='td-registration-page-btn-wrap' disabled={isRequest} onClick={signIn}>Send</button>
    )
};

LoginPageButton.propTypes = {
    isRequest: PropTypes.bool,
    signIn: PropTypes.func
};

export default LoginPageButton;