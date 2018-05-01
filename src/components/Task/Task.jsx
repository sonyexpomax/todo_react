import React, { Component } from "react";
import './style.css';
import { removeTaskAction, changeTaskStateAction } from '../../redux/actions/tasks';

class Task extends Component{

    changeStateHandler = () => {
        this.props.dispatch(changeTaskStateAction(this.props.task.id))
    };

    removeHandler = (e) => {
        e.preventDefault();
        this.props.dispatch(removeTaskAction(this.props.task.id))
        // this.props.onRemove(this.props.task.id);
    };

    moveDownHandler = (e) => {
        e.preventDefault();

    };

    moveUpHandler = (e) => {
        e.preventDefault();
    };

    render(){
        return (
            <div className={ !this.props.task.isFinished ? 'task' : 'task task-finished'}>
                <input
                    type = "checkbox"
                    onChange = {this.changeStateHandler}
                    defaultChecked = {this.props.task.isFinished}
                />
                {this.props.task.text}
                <button
                    className = {'task-remove'}
                    title = {'Remove'}
                    ref = {this.props.task.id}
                    onClick = {this.removeHandler}
                >x</button>
                <i className="up" onClick={this.moveUpHandler} title={'Move upper'}></i>
                <i className="down" onClick={this.moveDownHandler} title={'Move bellow'}></i>
            </div>
        )
    }
}

export default Task;