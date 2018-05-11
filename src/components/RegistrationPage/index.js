import './style.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import {registerAction} from '../../redux/actions/authentificate';
import RegistrationPage from './RegistrationPage';

const RegistrationPageContainer = (props) => <RegistrationPage {...props} />;

RegistrationPageContainer.propTypes = {
    register: PropTypes.func,
    isRequest: PropTypes.bool,
    loggedIn: PropTypes.bool
};

function mapStateToProps (store) {
    return {
        isRequest: store.ui.button
    };
}

function mapDispatchToProps (dispatch) {
    return ({
        register: (email, password, passwordConfirm) => dispatch(registerAction(email, password, passwordConfirm))
    });
}

export default connect(mapStateToProps,mapDispatchToProps)(RegistrationPageContainer)