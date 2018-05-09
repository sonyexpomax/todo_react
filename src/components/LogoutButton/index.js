import './style.css';
import { connect } from 'react-redux';
import {logoutAction} from '../../redux/actions/authentificate';
import LogoutButton from './LogoutButton';
import PropTypes from 'prop-types';
import React from 'react';

const LogoutButtonContainer = (props) => <LogoutButton {...props} />;

LogoutButtonContainer.propTypes = {
    singOut: PropTypes.func
};

function mapDispatchToProps (dispatch) {
    return ({
        signOut: () => dispatch(logoutAction())
    });
}

export default connect(null, mapDispatchToProps)(LogoutButtonContainer);
