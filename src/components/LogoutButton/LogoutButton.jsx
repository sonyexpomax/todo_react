import React  from 'react';
import PropTypes from 'prop-types';
import './style.css';

const LogoutButton = (props) => {
    return (
        <div className='td-logout-btn-wrap' onClick={props.signOut}>Log out</div>
    )
};

LogoutButton.propTypes = {
    singOut: PropTypes.func
};

export default LogoutButton;