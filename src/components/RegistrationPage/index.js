import RegistrationPage from './RegistrationPage';
import React  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {registerAction} from "../../redux/actions/authentificate";
import './style.css';

const RegistrationPageContainer = (props) => <RegistrationPage {...props} />;

RegistrationPageContainer.propTypes = propTypes;

function mapStateToProps(store) {
    return {
        isRequest: store.ui.button
    };
}

function mapDispatchToProps (dispatch) {
    return ({
        register: (email, password, passwordConfirm) =>  dispatch(registerAction(email, password, passwordConfirm))
    });
}

export default connect(mapStateToProps,mapDispatchToProps)(RegistrationPageContainer)