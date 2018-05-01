import React, { Component } from "react";
import NewTask from './Newtask';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './style.css';

const propTypes = {
//
};

const NewTaskContainer = (props) => <NewTask {...props} />;

NewTaskContainer.propTypes = propTypes;

function mapStateToProps(store) {
    return {
        isRequest: store.ui.button
    };
}

export default connect(mapStateToProps)(NewTaskContainer)