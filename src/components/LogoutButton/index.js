import React  from "react";
import LogoutButton from './LogoutButton';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {logoutAction} from "../../redux/actions/authentificate";
import './style.css';

const propTypes = {
//
};

const LogoutButtonContainer = (props) => <LogoutButton {...props} />;

LogoutButtonContainer.propTypes = propTypes;

function mapDispatchToProps (dispatch) {
    return ({
        signOut: () =>  dispatch(logoutAction())
    });
}

export default connect(null,mapDispatchToProps)(LogoutButtonContainer)