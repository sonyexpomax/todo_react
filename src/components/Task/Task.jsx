import './style.scss';
import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt, faArrowDown, faArrowUp } from '@fortawesome/fontawesome-free-solid';
import PropTypes from 'prop-types';

class Task extends Component{

    removeHandler = (e) => {
        e.preventDefault();
        this.props.removeTask();
    };

    moveDownHandler = (e) => {
        e.preventDefault();
        this.props.moveTaskDown();
    };

    moveUpHandler = (e) => {
        e.preventDefault();
        this.props.moveTaskUp();
    };

    render () {

        return (
            <div className={ !this.props.task.is_done ? 'td-task-wrap' : 'td-task-wrap td-task-finished'}>
                <div className='td-task-arrows td-task-visible-icon'>
                    <FontAwesomeIcon
                        icon={faArrowUp}
                        size='xs'
                        className = {!this.props.isFirst ? 'td-task-arrow' : 'td-task-arrow-non-active' }
                        onClick={!this.props.isFirst ? this.moveUpHandler : ''}
                    />
                    <FontAwesomeIcon
                        icon={faArrowDown}
                        size='xs'
                        className = {!this.props.isLast ? 'td-task-arrow' : 'td-task-arrow-non-active' }
                        onClick={!this.props.isLast ? this.moveDownHandler : ''}
                    />
                </div>
                <label className='td-task-change-state'>
                    <input
                        id='change-state'
                        type='checkbox'
                        onChange = {this.props.changeTaskState}
                        defaultChecked = {this.props.task.is_done}
                    />
                        <span></span>
                </label>
                {this.props.task.content}
                <FontAwesomeIcon
                    icon={faTrashAlt}
                    size='xs'
                    ref = {this.props.task.id}
                    className = {'td-task-visible-icon td-task-remove'}
                    onClick={this.removeHandler}
                />
            </div>
        );
    }
}

Task.propTypes = {
    task: PropTypes.object,
    isFirst: PropTypes.bool,
    isLast: PropTypes.bool,
    moveTaskDown: PropTypes.func,
    moveTaskUp: PropTypes.func,
    removeTask: PropTypes.func,
    changeTaskState: PropTypes.func
};

export default Task;
