import './style.css';
import PropTypes from 'prop-types';
import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faSignOutAlt} from "@fortawesome/fontawesome-free-solid/index";

const LogoutButton = (props) => {
    return (
        <FontAwesomeIcon
            icon={faSignOutAlt}
            size='xs'
            className = 'td-app-sign-out'
            onClick={props.signOut}
        />
    );
};

LogoutButton.propTypes = {
    singOut: PropTypes.func
};

export default LogoutButton;
