import './style.css';
import PropTypes from 'prop-types';
import React from 'react';

const RegistrationPageButton = (props) => {
    const {isRequest, signIn} = props;
    return (
        <button className='td-registration-page-btn-wrap' disabled={isRequest} onClick={signIn}>Send</button>
    );
};

RegistrationPageButton.propTypes = {
    isRequest: PropTypes.bool,
    signIn: PropTypes.func
};

export default RegistrationPageButton;
