import React, { Component } from "react";
import './style.css';

class Task extends Component{

    changeStateHandler = () => {
        this.props.changeTaskState(this.props.task.id);
    };

    removeHandler = (e) => {
        e.preventDefault();
        this.props.removeTask(this.props.task.id);
    };

    moveDownHandler = (e) => {
        e.preventDefault();
        this.props.moveTaskDown(this.props.task.id);
    };

    moveUpHandler = (e) => {
        e.preventDefault();
        this.props.moveTaskUp(this.props.task.id);
    };

    render(){
        return (
            <div className={ !this.props.task.is_done ? 'task' : 'task task-finished'}>
                <input
                    type = "checkbox"
                    onChange = {this.changeStateHandler}
                    defaultChecked = {this.props.task.is_done}
                />
                {this.props.task.content}
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

Task.propTypes = {
    task: PropTypes.object,
    moveTaskDown: PropTypes.function,
    moveTaskUp: PropTypes.function,
    removeTask: PropTypes.function,
    changeTaskState: PropTypes.function
};


export default Task;