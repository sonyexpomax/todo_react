import './style.css';
import PropTypes from 'prop-types';
import React from 'react';

const LogoutButton = (props) => {
    return (
        <div className='td-logout-btn-wrap' onClick={props.signOut}>Log out</div>
    );
};

LogoutButton.propTypes = {
    singOut: PropTypes.func
};

export default LogoutButton;
