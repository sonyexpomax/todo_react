import React from "react";
import NewList from './NewList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './style.css';

const propTypes = {
//
};

const NewListContainer = (props) => <NewList {...props} />;

NewListContainer.propTypes = propTypes;

function mapStateToProps(store) {
    return {
        isRequest: store.ui.button
    };
}

export default connect(mapStateToProps)(NewListContainer)