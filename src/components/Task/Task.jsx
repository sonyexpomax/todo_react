import './style.css';
import React, { Component } from 'react';
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
        let upButton = this.props.isFirst
            ? <i id='up-button' className='td-task-up-disable'/>
            : <i id='up-button' className='td-task-up' onClick={this.moveUpHandler} title={'Move up'}/>;
        let downButton = this.props.isLast
            ? <i id='down-button' className='td-task-down-disable'/>
            : <i id='down-button' className='td-task-down' onClick={this.moveDownHandler} title={'Move down'}/>;
        return (
            <div className={ !this.props.task.is_done ? 'td-task-wrap' : 'td-task-wrap td-task-finished'}>
                <input
                    id='change-state'
                    type = 'checkbox'
                    onChange = {this.props.changeTaskState}
                    defaultChecked = {this.props.task.is_done}
                />
                {this.props.task.content}
                <button
                    className = 'td-task-remove'
                    title = {'Remove'}
                    ref = {this.props.task.id}
                    onClick = {this.removeHandler}
                >x</button>

                {upButton}
                {downButton}
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
