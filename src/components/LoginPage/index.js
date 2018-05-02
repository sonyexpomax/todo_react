import LoginPage from './LoginPage';
import React  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

export default connect(mapStateToProps)(LoginPageContainer)