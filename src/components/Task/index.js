import React from "react";
import Task from './Task';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
    task: PropTypes.object,
};

const TaskContainer = (props) => <Task {...props} />;

TaskContainer.propTypes = propTypes;

function mapStateToProps(store) {
    return {

    }
}

export default connect(mapStateToProps)(TaskContainer)