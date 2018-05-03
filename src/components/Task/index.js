import React from "react";
import Task from './Task';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {moveUpTaskAction,moveDownTaskAction,changeTaskStateAction,removeTaskAction} from "../../redux/actions/tasks";

const TaskContainer = (props) => <Task {...props} />;

TaskContainer.propTypes = propTypes;

function mapDispatchToProps (dispatch) {
    return ({
        removeTask: (taskId) =>  dispatch(removeTaskAction(taskId)),
        changeTaskState: (taskId) =>  dispatch(changeTaskStateAction(taskId)),
        moveTaskUp: (taskId) =>  dispatch(moveUpTaskAction(taskId)),
        moveTaskDown: (taskId) =>  dispatch(moveDownTaskAction(taskId)),
    });
}

export default connect(null, mapDispatchToProps)(TaskContainer)