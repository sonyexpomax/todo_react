import LoginPage from './LoginPage';
import React  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {loginAction} from "../../redux/actions/authentificate";

import './style.css';

const propTypes = {
//
};

const LoginPageContainer = (props) => <LoginPage {...props} />;

LoginPageContainer.propTypes = propTypes;

function mapStateToProps(store) {
    return {
        isRequest: store.ui.button
    };
}
function mapDispatchToProps (dispatch) {
    return ({
        signIn: (login, password) =>  dispatch(loginAction(login, password))
    });
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPageContainer)