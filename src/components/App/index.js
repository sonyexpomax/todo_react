import App from './App';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

const AppContainer = (props) => <App {...props} />;

AppContainer.propTypes = {
    loggedIn: PropTypes.bool
};

function mapStateToProps (store) {
    return {
        loggedIn: store.user.loggedIn
    };
}

export default connect(mapStateToProps)(AppContainer)