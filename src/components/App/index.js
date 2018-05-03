import App from './App';
import React  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
//
};

const AppContainer = (props) => <App {...props} />;

AppContainer.propTypes = propTypes;

function mapStateToProps(store) {
    return {
        loggedIn: store.user.loggedIn
    };
}

export default connect(mapStateToProps)(AppContainer)