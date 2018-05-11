import './style.scss';
import { connect } from 'react-redux';
import {loginAction} from '../../redux/actions/authentificate';
import LoginPage from './LoginPage';
import PropTypes from 'prop-types';
import React from 'react';

const LoginPageContainer = (props) => <LoginPage {...props} />;

LoginPageContainer.propTypes = {
    signIn: PropTypes.func,
    loggedIn: PropTypes.bool,
    isRequest: PropTypes.bool,
};

function mapStateToProps (store) {
    return {
        isRequest: store.ui.button,
        loggedIn: store.user.loggedIn
    };
}
function mapDispatchToProps (dispatch) {
    return ({
        signIn: (login, password) => dispatch(loginAction(login, password))
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);