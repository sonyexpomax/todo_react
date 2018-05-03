import RegistrationPage from './RegistrationPage';
import React  from 'react';
import { connect } from 'react-redux';
import {registerAction} from "../../redux/actions/authentificate";
import './style.css';
import PropTypes from 'prop-types';

const RegistrationPageContainer = (props) => <RegistrationPage {...props} />;

RegistrationPageContainer.propTypes = {
    register: PropTypes.func,
    isRequest: PropTypes.bool
};

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