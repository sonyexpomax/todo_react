import {moveUpTaskAction, moveDownTaskAction, changeTaskStateAction, removeTaskAction} from '../../redux/actions/tasks';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import Task from './Task';
const TaskContainer = (props) => <Task {...props} />;

TaskContainer.propTypes = {
    task: PropTypes.object,
    isFirst: PropTypes.bool,
    isLast: PropTypes.bool,
    moveTaskDown: PropTypes.func,
    moveTaskUp: PropTypes.func,
    removeTask: PropTypes.func,
    changeTaskState: PropTypes.func
};

function mapDispatchToProps (dispatch, ownProps) {
    return ({
        removeTask: () => dispatch(removeTaskAction(ownProps.task.id)),
        changeTaskState: () => dispatch(changeTaskStateAction(ownProps.task.id)),
        moveTaskUp: () => dispatch(moveUpTaskAction(ownProps.task.id)),
        moveTaskDown: () => dispatch(moveDownTaskAction(ownProps.task.id))
    });
}

export default connect(null, mapDispatchToProps)(TaskContainer);
