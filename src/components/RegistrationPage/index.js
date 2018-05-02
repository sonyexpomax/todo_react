import RegistrationPage from './RegistrationPage';
import React  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './style.css';

const propTypes = {
//
};

const RegistrationPageContainer = (props) => <RegistrationPage {...props} />;

RegistrationPageContainer.propTypes = propTypes;

function mapStateToProps(store) {
    return {
        isRequest: store.ui.button
    };
}

export default connect(mapStateToProps)(RegistrationPageContainer)