import './style.scss';
import PropTypes from 'prop-types';
import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faSignOutAlt} from "@fortawesome/fontawesome-free-solid/index";

const LogoutButton = (props) => {
    return (
        <FontAwesomeIcon
            icon={faSignOutAlt}
            id='logout-btn'
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
