import React, { Component } from "react";
import PrivateRoute from './PrivateRoute';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import './style.css';

const propTypes = {
//
};

const PrivateRouteContainer = (props) => <PrivateRoute {...props} />;

PrivateRouteContainer.propTypes = propTypes;

function mapStateToProps(store) {
    console.log(store.user);
    return {
        loggedIn: store.user.loggedIn
    };
}

export default connect(mapStateToProps)(PrivateRouteContainer)