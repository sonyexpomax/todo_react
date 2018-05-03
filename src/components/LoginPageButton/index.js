import React  from 'react'
import PropTypes from 'prop-types'
import './style.css';

const LoginPageButton = (props) => {
    const {isRequest, signIn} = props;
    return (
        <button className='td-login-page-btn-wrap' disabled={isRequest} onClick={signIn}>Sign In</button>
    )
};

LoginPageButton.propTypes = {
    isRequest: PropTypes.bool,
    signIg: PropTypes.func,
};

export default LoginPageButton;